import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => (
  <footer>

    <Link href="/tags">
      <a>Tags</a>
    </Link>

    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
)

export default Footer