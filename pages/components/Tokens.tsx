import React, { useEffect, useState } from 'react';
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

      let balance = Moralis.Units.FromWei(item.balance)
      let n = balance.toString().slice(0,15)

      const tokenAddress = item.token_address

      let cssNum = (i+1)*100

      let cssStuff = `flex flex-row rounded-xl border-2 border-slate-800 p-2`


      console.log(cssNum)
      console.log(item.symbol)

      tokenListComponent.push(
        <div key={i} className={cssStuff}>
          
          <div className='flex-1 px-2 py-1 transition ease-in-out rounded-xl hover:translate-x-4 hover:bg-purple-600 duration-300'>
            <a href={'https://polygonscan.com/address/'.concat(tokenAddress)} target={'_blank'}>
            {item.symbol}
            </a>
          </div>
          <div className='flex-none border-2 border-slate-800'></div>
          <div className='flex-1 text-right'>{n}</div>
        </div>
      )
      i++
    })

    await setListComp(tokenListComponent)

  }

  return (
    <div className='flex flex-col w-full h-fit p-4 gap-4 drop-shadow-2xl border-4 border-purple-900 bg-purple-400 rounded-2xl'>
      <div className='text-xl'>
        MY TOKENS
      </div>

      <div className='flex flex-row bg-purple-300 rounded-xl p-2 drop-shadow-xl border-2 border-purple-900'>
        <div className='flex-1 left-0 p-1'>Token</div>
        <div className='right-0 p-1'>Balance</div>
      </div>

      <div className='flex flex-col gap-4'>
          {listComp}
      </div>

      <div className='flex flex-row gap-2 self-stretch'>
        <div className='px-2 py-1 rounded-xl border-2 border-purple-900 transition-color ease-in-out bg-purple-300 drop-shadow-xl delay-100 hover:bg-purple-500 duration-300'>
          <button onClick={showData
            }>View Tokens</button>
        </div>
        <div className='px-2 py-1 rounded-xl border-2 border-purple-900 transition-color ease-in-out bg-purple-300 drop-shadow-xl delay-100 hover:bg-purple-500 duration-300'>
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
