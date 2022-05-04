import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <p>footer</p>
      <Link href="/feed.xml">
        <a>RSS</a>
      </Link>
    </footer>
  )
}
