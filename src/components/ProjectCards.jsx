import React, { useState } from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import Bubble from './Bubble';
import { motion } from 'framer-motion';
import { fadeIn } from '../assets/Animations/fadeIn';
import { Link } from 'react-router-dom';


const ProjectCards = ({ img, text, bubbleText, link }) => {
    const [hover, isHover] = useState(false);

    const mouseEnter = () => isHover(true);
    const mouseExit = () => isHover(false);
    console.log(bubbleText?.map(text => text), 'sadsd')
    return (
        <motion.div
        variants={fadeIn('left', 0.2, 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.05 }}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseExit}
            className="relative p-[1px] rounded-xl bg-black shadow-md shadow-primary-dark-50 hover:bg-gradient-to-r from-[#C6FCA6] via-[#01fdd3] to-[#C6FCA6] w-40 h-40 sm:w-52 sm:h-52 lg:w-1/4 lg:h-80"
        >
            <a href={link} target='_blank'>
            <div className="flex flex-col justify-between items-center w-full h-full rounded-xl bg-[#14212b] backdrop-blur-lg  px-4 py-4">
                {/* Text Container */}
                <div className="text-white w-full">
                    <h1>{text}</h1>
                </div>

                <div className='hidden sm:flex mt-2 sm:flex-col sm:flex-wrap sm:text-[0.3rem] lg:text-[0.7rem] gap-2 h-auto w-auto text-white'>
                    <h1 className='pl-[0] text-xs bg-gradient-to-r from-[#C6FCA6] to-[#A7FCEE] text-transparent bg-clip-text'>Tech Stack Used:</h1>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {bubbleText?.map((text, index) => (
                            <Bubble key={index} text={text} />
                        ))}
                    </div>
                </div>
                {/* Arrow at bottom */}
                <div className="text-white w-full flex justify-end">
                    {hover ? <MdArrowOutward /> : <HiOutlineArrowSmRight />}
                </div>
            </div>
            </a>
        </motion.div>
    );
};

export default ProjectCards;
