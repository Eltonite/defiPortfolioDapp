import React from 'react';
import { useMoralis } from 'react-moralis';

function ButtonDelete(options) {

  const contractOptions = options.options
  console.log(contractOptions)

  const {Moralis} = useMoralis();

  const dispose = async () => {
    let result = await Moralis.transfer(contractOptions)
  }


  return <div className='rounded-xl border-2 border-purple-900 transition ease-in-out hover:bg-purple-300 duration-300'>

    <button onClick={dispose} className='p-3'>

      <svg className='transition scale-90 ease-in-out hover:rotate-45 hover:scale-100 duration-300' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm-14-19v7h14v-7h-14zm9-3h-4v1h4v-1z"/></svg>

    </button>

  </div>;
}

export default ButtonDelete;
