import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

type Post = {
  title: string
  slug: string
  date: string
  content: string
  tags: string[]
};

const postsDirectory = path.join(process.cwd(), 'contents/posts');

export function getPostSlugs() {
  const allEntries = fs.readdirSync(postsDirectory, { withFileTypes: true })
  return allEntries
    .filter((dirent) => dirent.name.match(/.+\.md$/))
    .map(({ name }) => name.replace(/^(.+)\.md$/, '$1'))
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  fields = fields.length ? fields : ['title', 'slug', 'date', 'tags']
  const fullPath = path.join(postsDirectory, slug + '.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Post = {
    title: '',
    slug: '',
    date: '',
    content: '',
    tags: []
  }

  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        items[field] = slug;
        break;
      case 'content':
        items[field] = content;
        break;
      case 'title':
      case 'date':
      case 'tags':
        items[field] = data[field];
    }
  })

  return items
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
