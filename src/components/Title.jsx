import React from 'react'

const Title = ({small, main, sub}) => {
    return (
        <div className='flex flex-col items-center px-5 text-center'>
            <h5 className='bg-gradient-to-r from-[#C6FCA6] to-[#A7FCEE] text-xl text-transparent bg-clip-text'>{small}</h5>
            <h1 className='text-white font-calistoga text-3xl sm:text-5xl leading-12 sm:leading-16 py-6'>{main}</h1>
            <p className='text-gray-400 '>{sub}</p>
        </div>
    )
}

export default Title