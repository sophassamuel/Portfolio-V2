import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/Animations/fadeIn'

const LongCard = ({ image, title, description}) => {
    return (
        <motion.div
            variants={fadeIn('up', 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.05 }}
            className='w-[90%] lg:w-[50%]  flex flex-col-reverse items-center sm:flex-row p-8 sm:p-10  gap-10 bg-[#14212b] backdrop-blur-lg hover:bg-gradient-to-r from-[#14212b] via-[#1f2f3c] to-[#14212b]  rounded-lg transition-all duration-300 hover:scale-105 hover:rounded-md hover:shadow-[0px_0px_10px_#05df72] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'
        >

            {/* Text Container */}
            <div className='flex flex-col w-full sm:w-[60%] gap-5 items-center sm:items-start  text-black dark:text-white'>
                <h1 className='text-lg text-center sm:text-left font-bold'>
                    {title}
                </h1>
                <p className='text-xs text-center sm:text-left text-gray-400'>
                    {description}
                </p>
                <button className='w-32 h-10 rounded-lg mt-5 bg-white text-black transition-all duration-300  hover:rounded-md hover:shadow-[3px_3px_0px_#05df72] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
                    Read More
                </button>
            </div>

            {/* Image Container */}
            <div className=' w-full sm:w-[40%] h-full'>
                <img src={`${image}`} alt='Card Image' className='w-full h-56 object-fill rounded-lg' />
            </div>


        </motion.div>
    )
}

export default LongCard