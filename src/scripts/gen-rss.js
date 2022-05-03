const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'stpo',
    site_url: 'https://matsuoshi.github.io',
    feed_url: 'https://matsuoshi.github.io/feed.xml'
  })

  const posts = await fs.readdir(path.join(__dirname, '..', '..', 'contents', 'posts'))

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return null

      const content = await fs.readFile(
        path.join(__dirname, '..', '..', 'contents', 'posts', name)
      )

      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: feed.site_url + '/posts/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tags,
        author: frontmatter.data.author
      })
    })
  )

  feed.items = feed.items
    .sort((a, b) => a.date > b.date ? -1 : 1)
    .slice(0, 20)

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
