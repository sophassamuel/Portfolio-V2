import React, { useEffect, useState } from 'react'
import Memoji from '@/assets/Memojis-home.png'
const Hero = () => {
    const list = ["Developer", "Designer", "Data Analyst", "Web3 Enthusiast"]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const counter = setInterval(() => {
            setIndex(prev => (prev + 1) % list.length)
        }, 3000)
        return () => clearInterval(counter)
    })
    return (
        <div className='text-black h-dvh flex justify-center py-32 dark:text-white'>
            <div>
                {/* Memoji section */}
                <div className='flex flex-col items-center'>
                    <div><img src={Memoji} alt="" className='w-36 h-36' /></div>
                    <div className='-mt-8 drop-shadow-dark-green/20 rounded-xl shadow-sm'>
                        <div className='flex items-center border-[0.5px] border-green-900 gap-3 justify-center rounded-lg bg-dark-green  w-auto h-10 p-5'> <div className='bg-green-400 w-4 h-4 rounded-full'> </div> <h3 >Open to Curious Ideas</h3></div>
                    </div>
                </div>
                <div className='my-5'>
                    {/* Heading section */}
                    <div className='flex flex-col w-[80%] mx-auto justify-center '>
                        <h1 className='text-center text-4xl leading-12'>
                            Welcome to my realm of curiosity
                        </h1>
                        <h3 className='text-center my-4 h-12'>
                            I am an independent{" "}
                            <span
                                key={list[index]} // this re-renders the span on each update
                                className='text-white font-bold transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in'
                            >
                                {list[index]}
                            </span>
                            <br />
                            My interests are ever-evolving.
                        </h3>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Hero