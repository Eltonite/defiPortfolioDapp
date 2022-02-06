import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Navbar from './components/Navbar';
import Tokens from './components/Tokens';
import Welcome from './components/Welcome';

export default function Home() {

  const {isAuthenticated, authenticate, logout} = useMoralis();


  if (!isAuthenticated){

    return(
      <div className='flex min-h-screen flex-col justify-center p-2 gap-4 border-8 border-slate-800 bg-gradient-to-b from-teal-500 to-orange-400'>


        <div className='flex flex-col min-h-screen items-center justify-center py-2  gap-10 text-slate-800'>

          <Welcome />

          <button className='border-4 rounded-xl px-4 py-2 border-slate-800 hover:bg-gradient-to-r from-teal-500 to-orange-400' onClick={()=>authenticate()}>ENTER APP</button>
        </div>

        <div></div>

        
      </div>
      
    )
  }


  return (
    <div className="flex min-h-screen flex-col justify-center p-2 gap-4 border-8 border-slate-800 bg-gradient-to-b from-teal-500 to-orange-400">
      <Head>
        <title>Defi Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <div className="flex min-h-screen flex-col items-center gap-8 p-2">

        <Tokens />

        <button className='border-2 rounded-xl px-4 py-2 border-slate-800 hover:bg-gradient-to-r from-teal-500 to-orange-400' onClick={()=>logout()}>LOGOUT</button>

      </div>

      <div></div>

      

    </div>
  )
}
