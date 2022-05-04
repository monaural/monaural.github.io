import Link from 'next/link'

export default function PostCard({post}: {post: any}) {
  return (
    <article>
      <Link href={`/posts/${post.slug}`} key={post.slug}>
        <a>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </a>
      </Link>

      {/* <ul>
        {post.tags.map((tag: any) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}>
              <a>{tag}</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </article>
  )
}
