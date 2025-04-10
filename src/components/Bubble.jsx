import React from 'react'

const Bubble = ({text}) => {
  return (
    <div className='text-center rounded-xl border-[0.5px] px-2 py-1 lg:px-3 lg:py-2 break-words   border-gray-600'>
        <h4> {text} </h4>
    </div>
  )
}

export default Bubble