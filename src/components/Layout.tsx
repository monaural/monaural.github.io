import { ReactNode } from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children, head = {}, home = false}: { children?: ReactNode, head?: any, home?: boolean }) {
  return (
    <>
      <Head params={head} />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
