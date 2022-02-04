import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Welcome from './components/Welcome';

export default function Home() {

  const {isAuthenticated, authenticate, logout} = useMoralis();


  if (!isAuthenticated){

    return(
      <div className='flex flex-row min-h-screen items-center justify-center py-2 bg-slate-500 gap-10 text-slate-800'>

        <div></div>

        <div className='flex flex-col min-h-screen items-center justify-center py-2 bg-slate-500 gap-10 text-slate-800'>
          <Welcome />

          <button className='border-4 rounded-xl px-4 py-2 border-slate-800 hover:bg-slate-400' onClick={()=>authenticate()}>ENTER APP</button>
        </div>

        <div></div>

        
      </div>
      
    )
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-400">
      <Head>
        <title>Defi Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={()=>logout()}>LOGOUT</button>

    </div>
  )
}
