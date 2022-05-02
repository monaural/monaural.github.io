import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }: {children: any}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
