import React from 'react'
import { fadeIn } from '@/assets/Animations/fadeIn'
import { motion } from 'framer-motion'


const Title = ({small, main, sub}) => {
    return (
        <motion.div 
            variants={fadeIn('down', 0, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
        className='flex flex-col items-center px-5 text-center'>
            <h5 className='bg-gradient-to-r from-[#C6FCA6] to-[#A7FCEE] text-xl text-transparent bg-clip-text'>{small}</h5>
            <h1 className='text-white font-calistoga text-3xl sm:text-5xl leading-10 sm:leading-16 py-4'>{main}</h1>
            <p className='text-gray-400 text-sm sm:text-base'>{sub}</p>
        </motion.div>
    )
}

export default Title