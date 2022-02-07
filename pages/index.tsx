import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import ButtonDelete from './components/ButtonDelete';
import Navbar from './components/Navbar';
import Tokens from './components/Tokens';
import Welcome from './components/Welcome';

export default function Home() {

  const {isAuthenticated, authenticate, logout} = useMoralis();


  if (!isAuthenticated){

    return(
      <div className='flex min-h-screen flex-col justify-center p-2 gap-4 bg-gradient-to-b from-purple-500 to-purple-900 text-black font-dosis'>


        <div className='flex flex-col min-h-screen items-center justify-center py-2  gap-10'>

          <Welcome />

          <button className='rounded-xl p-4 px-6 border-4 border-purple-900 transition-color ease-in-out bg-purple-300 drop-shadow-xl delay-100 hover:bg-purple-500 duration-300' onClick={()=>authenticate()}>ENTER APP</button>
        </div>

        <div></div>

        
      </div>
      
    )
  }


  return (
    <div className="flex min-h-screen flex-col justify-center p-4 gap-4 bg-gradient-to-b from-purple-500 to-purple-900 text-black font-dosis">
      <Head>
        <title>Defi Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <div className="flex min-h-screen flex-col items-center gap-8">

        <Tokens />

        <button className='px-4 py-2 rounded-xl border-4 border-purple-900 transition-color ease-in-out bg-purple-300 drop-shadow-xl delay-100 hover:bg-purple-500 duration-300' onClick={()=>logout()}>LOGOUT</button>

      </div>

      <div></div>

      

    </div>
  )
}

