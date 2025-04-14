import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/assets/Animations/fadeIn'

const Bubble = ({ text, duration }) => {
  return (
    <motion.div
      variants={fadeIn('down', duration, 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
      className='text-center rounded-xl border-[0.5px] px-2 py-1 lg:px-3 lg:py-2 break-words   border-gray-600'>
      <h4> {text} </h4>
    </motion.div>
  )
}

export default Bubble