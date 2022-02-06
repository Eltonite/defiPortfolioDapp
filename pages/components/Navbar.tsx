import React, { useState } from 'react';
import { useNativeBalance } from 'react-moralis';

function Navbar() {

  const { data: balance, nativeToken, error, isLoading } = useNativeBalance();

  window.scrollTo(0, 0)
  
  return (
    <div className='flex flex-row-reverse px-2 py-2 gap-1 rounded-xl drop-shadow-2xl border-4 border-purple-900 bg-purple-400'>
      {error && <>{JSON.stringify(error)}</>}
      <div className='px-2 py-1'>
        {balance.formatted}
      </div>
    </div>
  )
}

export default Navbar;
