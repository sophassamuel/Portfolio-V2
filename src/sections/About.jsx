import React from 'react'
import aboutimage from '@/assets/About-Image.png'
import Bubble from '../components/Bubble'
import Title from '../components/Title'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/Animations/fadeIn'

const About = () => {

    const jobroles = [{job:'Software developer', duration: 0.2}, {job:'Full Stack Engineer', duration: 0.4}, {job:'Web3 Enthusiast', duration: 0.5}, {job:'Web Designer', duration: 0.6}, {job:'AI/ML Architect', duration: 0.7}, {job:'Security Analyst', duration: 0.8}]
    return (
        <div id='about' className='w-full h-auto py-10 overflow-clip'>
            {/* Heading section */}

            <Title
                small={'About Me'}
                main={'Bringing Ideas to Life Through Design & Code'}
                sub={'Passionate about crafting intuitive digital experiences that make a lasting impact.'}
            />

            {/* Main Section Image and Text */}
            <div className='flex flex-col my-10 sm:my-15 lg:my-20 items-center px-0 sm:px-10 lg:px-52 sm:flex-row'>
                {/* Image Container */}
                <motion.div
                    variants={fadeIn('down', 0.3, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.05 }}
                    className='relative w-96 sm:w-[50rem] lg:w-[50rem]  px-10 py-5  h-auto'>
                    <div className='absolute z-0   blur-lg -mx-2 -my-2 sm:-mx-3 sm:-my-2 lg:-mx-6 lg:-my-6  animate-spin  size-80 sm:size-80 lg:size-[34rem]  rounded-full bg-radial-[at_50%_75%] from-[#C6FCA6] via-[#01fdd3]   to-indigo-900 to-90%'></div>
                    <img src={aboutimage} alt="Sophas Samuel Image" className='relative rounded-2xl z-50 shadow-black shadow-md' />
                </motion.div>

                {/* Text Containter */}
                <div className='text-center w-[80%] sm:w-[100%] lg:w-[70%] px-0 sm:px-10  mt-4 sm:mt-0 text-white text-xs  sm:text-[0.65rem] lg:text-lg leading-5 sm:leading-5 lg:leading-8 sm:text-left'>
                    <motion.p
                    variants={fadeIn('down', 0.3, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.05 }}
                    >
                        Passionate Software Engineer with strong problem-solving and communication skills, specializing in troubleshooting, technical
                        analysis, and client support. With 1+ years of experience in web and mobile development, I bridge technical and business
                        requirements to enhance user experience. Proficient in AI, Blockchain, and emerging technologies, I ensure efficient issue resolution
                        and seamless software performance. A published researcher, committed to continuous learning, innovation, and building scalable
                        solutions.
                    </motion.p>
                    {/* Quote Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5 text-[0.5rem] sm:text-[0.48rem] lg:text-sm sm:mt-5  lg:mt-10 w-full">
                        {jobroles.map((item, index) => {
                            const {job, duration} = item;
                            return (
                                <Bubble key={index} text={job} duration={duration} />
                            )

                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About