import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {

  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL

  const appID = process.env.NEXT_PUBLIC_APP_ID

  return(
    <MoralisProvider serverUrl={serverURL} appId={appID}>
      {
        <Component {...pageProps} />
      }
    </MoralisProvider>

  )
  
}

export default MyApp
