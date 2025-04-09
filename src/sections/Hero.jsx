import React, { useEffect, useState } from 'react'
import Memoji from '@/assets/Memojis-home.png'
import { MdArrowOutward } from "react-icons/md";
import InfiniteScrollingLogosAnimation from '../components/ScrollingLogos';

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
        <div className='text-black h-auto flex flex-col items-center overflow-clip justify-center py-10 dark:text-white'>
            <div>
                {/* Memoji section */}
                <div className='flex flex-col items-center'>
                    <div><img src={Memoji} alt="" className='w-36 h-36' /></div>
                    <div className='-mt-8 drop-shadow-dark-green/20 rounded-xl shadow-sm'>
                        <div className='relative flex items-center border-[0.5px] border-green-900 gap-3 justify-center rounded-lg bg-dark-green  w-auto h-10 p-5'>
                            <span className="relative flex size-3">
                                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                                <span className='relative inline-flex size-3 rounded-full bg-green-500' />
                            </span>
                            <h3 >Open to Curious Ideas</h3></div>
                    </div>
                </div>
                <div className='mt-5'>
                    {/* Heading section */}
                    <div className='flex  flex-col w-[80%] py-5 mx-auto justify-center '>
                        <h1 className='text-center font-calistoga text-4xl sm:text-6xl leading-12 sm:leading-20'>
                            I'm <span className="text-green-400">Sophas</span>, crafting the future with code
                        </h1>

                        <h3 className='text-center font-display text-gray-500 my-4 h-12'>
                            I am an independent{" "}
                            <span
                                key={list[index]} // this re-renders the span on each update
                                className='text-white font-bold transition-opacity duration-500 ease-in-out opacity-100 animate-fade-in'
                            >
                                {list[index]}
                            </span>
                            <br />
                            My interests are ever-evolving and my curiosity is greater than my dopamine.
                        </h3>
                    </div>

                </div>
                <div className='mt-3 flex flex-col sm:flex-row gap-5 justify-center items-center'>
                    <button className='px-10 py-3 shadow-sm shadow-gray-800 bg-white rounded-lg text-black'>
                        👋 Let's Connect
                    </button>
                    <button className='py-3 shadow-sm shadow-gray-800 px-8 flex gap-2 bg-dark-button border-1 border-gray-700 rounded-lg'>
                        Explore Projects<MdArrowOutward className='mt-[3px] w-5 h-5' />
                    </button>

                </div>
            </div>
            <div className='mt-10'>
                <InfiniteScrollingLogosAnimation />
            </div>
        </div>
    )
}

export default Hero