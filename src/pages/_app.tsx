import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
