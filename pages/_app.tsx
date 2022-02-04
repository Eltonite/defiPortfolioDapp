import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_SERVER_URL_ROPSTEN} appId={process.env.NEXT_PUBLIC_APP_ID_ROPSTEN} >
      <Component {...pageProps} />
    </MoralisProvider>

  )
  
}

export default MyApp
