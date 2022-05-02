import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Link href="/tags">
        <a>Tags</a>
      </Link>
      <p>footer</p>
    </footer>
  )
}
