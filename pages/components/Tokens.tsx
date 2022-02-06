import React, { useState } from 'react';
import { useERC20Balances, useNativeBalance } from 'react-moralis';

function Tokens() {

  //const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();

  const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance();


  return (
    <div className='flex flex-col gap-4 justify-center text-center'>
      <div>hello</div>
      {error && <>{JSON.stringify(error)}</>}
      <div>
        <button onClick={() => {
          getBalances()
          console.log(balance)
        }} className='border-2 border-teal-200 p-2'>My Native Balances</button>
      </div>
      <div>
        {balance.formatted}
      </div>
    </div>
  )
}

export default Tokens;
