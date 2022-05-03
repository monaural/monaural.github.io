const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const siteUrl = 'https://matsuoshi.github.io'

async function generate() {
  const posts = await getAllPosts()

  await generateRss(posts, 'public/feed.xml', 20)
  await generateSitemap(posts, 'public/sitemap.txt', 1000)
}

async function getAllPosts() {
  const files = await fs.readdir(path.join(__dirname, '../../contents/posts'))

  const posts = await Promise.all(
    files.map(async (name) => {
      if (name.startsWith('index.')) return null

      const content = await fs.readFile(
        path.join(__dirname, '../../contents/posts', name)
      )

      const frontmatter = matter(content).data
      frontmatter.url = siteUrl + '/posts/' + name.replace(/\.mdx?/, '')
      return frontmatter
    })
  )

  return posts.sort((a, b) => a.date > b.date ? -1: 1)
}

async function generateRss(posts, filename, length) {
  const feed = new RSS({
    title: 'stpo',
    site_url: siteUrl,
    feed_url: `${siteUrl}/feed.xml`
  })

  posts
    .slice(0, length)
    .forEach(post => {
      feed.item({
        title: post.title,
        url: post.url,
        date: post.date,
        description: post.description,
        categories: post.tags,
        author: post.author
      })
    })

  await fs.writeFile(filename, feed.xml({ indent: true }))
}

async function generateSitemap(posts, filename, length) {
  const sitemap = posts
    .slice(0, length)
    .map(post => post.url)
    .join("\n")

  await fs.writeFile(filename, sitemap)
}

generate()
