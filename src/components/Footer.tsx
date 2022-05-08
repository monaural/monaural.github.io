import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <br></br>
      <footer>
        <p>2022 monaural / モノラル</p>
        <Link href="/feed.xml">
          <a>RSS</a>
        </Link>
      </footer>
    </>
  )
}
