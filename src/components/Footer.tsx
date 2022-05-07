import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <br></br>
      <footer>
        <p>stpo: ストッポ</p>
        <Link href="/feed.xml">
          <a>RSS</a>
        </Link>
      </footer>
    </>
  )
}
