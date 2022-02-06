import React, { useState } from 'react';
import { useERC20Balances, useMoralis } from 'react-moralis';

function Tokens() {

  const {data} = useERC20Balances();

  const {Moralis} = useMoralis();

  // const displayBal = async () => {
  //   const someObject = await tokenBalances.fetchERC20Balances()
  //   console.log(someObject)
  // }

  const tokenList:any = []
  const tokenListComponent:any = []

  const [listComp, setListComp] = useState(tokenListComponent);

  const showData = async () => {

    let i = 0
    await data?.map((item)=>{

      

      tokenListComponent.push(

        <div key={i} className='flex flex-row rounded-xl border-2 border-slate-800 p-2'>
          
          <div className='flex-1'>{item.symbol}</div>
          <div className='flex-none border-2 border-slate-800'></div>
          <div className='flex-1 text-right'>{
            Moralis.Units.FromWei(item.balance)
            }</div>
        </div>
        
      )
      i++
    })
    setListComp(tokenListComponent)
  }



  

  return (
    <div className='flex flex-col border-slate-800 w-full h-fit p-2 gap-4 border-2 rounded-xl'>
      <div className='text-xl'>
        MY TOKENS
      </div>

      <div className='flex flex-col gap-4'>
        {listComp}
      </div>

      <div className='flex flex-row gap-2'>
        <div className='px-2 py-1 border-2 rounded-xl border-slate-800 w-fit self-center hover:bg-gradient-to-r from-teal-500 to-orange-400'>
          <button onClick={showData}>Get Token Balances</button>
        </div>
        <div className='px-2 py-1 border-2 rounded-xl border-slate-800 w-fit self-center hover:bg-gradient-to-r from-teal-500 to-orange-400'>
          <button onClick={()=>{
            setListComp([])
            window.scrollTo(0, 0)
          }}>Clear List</button>
        </div>
      </div>
    </div>
  )
}

export default Tokens;
