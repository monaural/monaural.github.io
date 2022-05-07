import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Post = {
  title: string
  slug: string
  date: string
  tags: string[]
  thumbnail: string
  content: string
};

const postsDirectory = path.join(process.cwd(), 'contents/posts');

/**
 * 全投稿の slug を取得
 * @returns
 */
export function getPostSlugs() {
  const allEntries = fs.readdirSync(postsDirectory, { withFileTypes: true })
  return allEntries
    .filter((dirent) => dirent.name.match(/.+\.mdx?$/))
    .map(({ name }) => name.replace(/^(.+)\.mdx?$/, '$1'))
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  fields = fields.length ? fields : ['title', 'slug', 'date', 'tags', 'thumbnail', 'content']
  const {data, content} = getPostContents(slug)

  const post: any = {}

  fields.forEach(field => {
    switch (field) {
      case 'slug':
        post.slug = slug;
        break
      case 'content':
        post.content = content;
        break
      default:
        post[field] = data[field] || null
    }
  })

  return post
}

/**
 * スラッグから .mdx|.md ファイルを読み込む
 * @param slug
 * @returns
 */
function getPostContents(slug: string): any {
  const extensions = ['mdx', 'md']
  for (const extension of extensions) {
    const fullPath = path.join(postsDirectory, `${slug}.${extension}`)
    if (! fs.existsSync(fullPath)) {
      continue;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return matter(fileContents)
  }
}

/**
 * @param tag
 */
 export function getPostsByTag(tag: string) {
  return getAllPosts()
    .filter(post => post.tags.includes(tag))
}

/**
 * @param fields
 */
export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts;
}

export function getAllTags() {
  const tags = getAllPosts(['tags'])
    .map(p => p.tags)
    .flat()
    .sort() // todo 出現数を数える？
  return Array.from(new Set(tags))
}
