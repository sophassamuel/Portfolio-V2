import React from 'react'
import grain from '@/assets/grain.jpg'


const LongCard = ({ image, title, description }) => {
    return (
        <div
            className='w-[90%] lg:w-[50%]  flex flex-col-reverse items-center sm:flex-row p-4 sm:p-10  gap-10 bg-[#14212b] backdrop-blur-lg hover:bg-gradient-to-r from-[#5d8943] via-[#047f6a] to-[#5d8943]  shadow-md shadow-primary-dark-50 rounded-lg'
        >

            {/* Text Container */}
            <div className='flex flex-col w-full sm:w-[60%] gap-5 items-center sm:items-start  text-black dark:text-white'>
                <h1 className='text-lg text-center sm:text-left font-bold'>
                    {title}
                </h1>
                <p className='text-xs text-center sm:text-left text-gray-400'>
                    {description}
                </p>
                <button className='w-32 h-10 rounded-lg mt-5 bg-white text-black'>
                    Read More
                </button>
            </div>

            {/* Image Container */}
            <div className=' w-full sm:w-[40%] h-full'>
                <img src={`${image}`} alt='Card Image' className='w-full h-56 object-fill rounded-lg' />
            </div>


        </div>
    )
}

export default LongCard