import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {

  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL_POLYGON

  const appID = process.env.NEXT_PUBLIC_APP_ID_POLYGON


  return(
    <MoralisProvider serverUrl={serverURL} appId={appID} >
      {
        <Component {...pageProps} />
      }
    </MoralisProvider>

  )
  
}

export default MyApp
