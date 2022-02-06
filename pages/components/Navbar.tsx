import React, { useState } from 'react';
import { useNativeBalance } from 'react-moralis';

function Navbar() {

  const { data: balance, nativeToken, error, isLoading } = useNativeBalance();

  return (
    <div className='flex flex-row-reverse px-2 py-1 gap-1 '>
      {error && <>{JSON.stringify(error)}</>}
      <div className='px-2 py-1 border-2 rounded-xl border-slate-800'>
        {balance.formatted}
      </div>
    </div>
  )
}

export default Navbar;
