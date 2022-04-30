import fs from "fs"
import path from "path"
import matter from "gray-matter"

type Post = {
  title: string
  slug: string
  date: string
  content: string
  tags: string[]
};

const postsDirectory = path.join(process.cwd(), "contents");

export function getPostSlugs() {
  const allEntries = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allEntries
    .filter((dirent) => dirent.name.match(/.+\.md$/))
    .map(({ name }) => name.replace(/^(.+)\.md$/, '$1'));
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = path.join(postsDirectory, slug + '.md');
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {
    title: "",
    slug: "",
    date: "",
    content: "",
    tags: []
  };

  fields.forEach((field: string) => {
    switch (field) {
      case 'slug':
        items[field] = slug;
        break;
      case 'content':
        items[field] = content;
        break;
      default:
        items[field] = data[field];
    }
  });
  return items;
}

/**
 * @param fields 取得するフィールド
 */
export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
