import type { AppProps } from 'next/app'
import { googleTagManagerId } from '../utils/gtm'
import GTM, {GoogleTagManagerId} from '../components/GTM';
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GTM
      GTMId={googleTagManagerId as GoogleTagManagerId}
    />
    <Component {...pageProps} />
  </>
)

export default MyApp
