import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </h1>
      <Link href="/tags">
        <a>Tags</a>
      </Link>
    </header>
  )
}
