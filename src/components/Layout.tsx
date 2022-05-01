import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }: {children: any}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
