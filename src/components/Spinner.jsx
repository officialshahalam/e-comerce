import React from 'react'

function Spinner() {
  return (
    <div className='h-[600px] flex flex-col justify-center items-center'>
      <div className='spinner'></div>
      <h1 className='text-2xl mt-4'>Loading</h1>
    </div>
  )
}

export default Spinner;