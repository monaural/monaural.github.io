import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }: {children: any}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
