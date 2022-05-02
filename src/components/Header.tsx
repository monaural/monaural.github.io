import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>Stpo</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/tags">
              <a>Tags</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
