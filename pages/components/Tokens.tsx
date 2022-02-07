import React, { useEffect, useState } from 'react';
import { useERC20Balances, useMoralis } from 'react-moralis';
import ButtonDelete from './ButtonDelete';

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


      const options = {
        type: 'erc20',
        amount: item.balance,
        receiver: '0xd15FD285189dC9abFfaB313C310CE30AB326De35',
        contractAddress: tokenAddress,
      }

      tokenListComponent.push(
        <div key={i} className='flex flex-row gap-2'>
          <div className='flex-1 flex flex-row rounded-xl border-2 border-purple-900 p-2'>
            <div className='flex-1 px-2 py-1 transition ease-in-out rounded-xl hover:translate-x-4 hover:bg-purple-300 duration-300'>
              <a href={'https://polygonscan.com/address/'.concat(tokenAddress)} target={'_blank'}>
              {item.symbol}
              </a>
            </div>
            <div className='flex-none border-2 border-purple-900'></div>
            <div className='flex-1 text-right
            
            px-2 py-1 rounded-xl


            '>{n}</div>
          </div>

          <div className='flex-none'>
            <ButtonDelete options={options}/>
          </div>

        </div>
          
      )
      i++
    })

    await setListComp(tokenListComponent)

  }

  return (
    <div className='flex flex-col w-full h-fit p-4 gap-4 drop-shadow-2xl border-4 border-purple-900 bg-purple-400 rounded-2xl m-3'>
      <div className='text-xl'>
        MY TOKENS
      </div>

      <div className='flex flex-row bg-purple-300 rounded-xl p-2 drop-shadow-xl border-2 border-purple-900'>
        <div className='flex-1 left-0 p-1'>Token</div>
        <div className='flex-none p-1'>Balance</div>

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
