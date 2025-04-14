import React from 'react'
import Title from '../components/Title'
import { motion } from 'framer-motion'
import { fadeIn } from '@/assets/Animations/fadeIn'

const Experience = () => {
    return (
        <div className='flex flex-col items-center overflow-clip w-full py-10'>
            <Title
                small={'Experience'}
                main={'Where I’ve Grown and Contributed'}
                sub={'A look at the roles, teams, and challenges that shaped my journey so far.'}
            />

            <div className='flex flex-col w-full lg:w-[80%] gap-5 items-center py-10'>

                {/* Experience 1 */}
                <motion.div
                    variants={fadeIn('down', 0.2, 1)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'tween' }}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.05 }}
                    className='bg-[#14212b] border-gray-700 border-1 hover:border-b-green-500 overflow-clip hover:border-r-green-500 shadow-md shadow-green-950 backdrop-blur-lg text-white p-8 rounded-lg w-[90%] lg:w-[80%]'>
                    <div className='absolute -top-5 -right-5 lg:-top-24 lg:-right-10 blur-lg md:blur-2xl lg:blur-3xl w-28 h-28 md:w-36 md:h-36 lg:h-52 lg:w-52 bg-linear-to-l from-[#C6FCA6] to-[#01fdd3] animate-spin rounded-full'></div>
                    <div className='relative'>
                        <h1 className='text-2xl font-bold mb-3 '> Full Stack Engineer </h1>
                        <h4 className='text-gray-300 mb-1 text-xs sm:text-base '> Freelance (Self-Employed) · <span>Remote</span></h4>
                        <h4 className='text-gray-300 mb-4 text-xs sm:text-base'> Aug 2024 – Present · Puducherry, India </h4>
                        <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                            <li className='flex flex-row gap-2 items-start'> - Built and deployed full-stack applications using React.js, Node.js, Express.js, Django, PostgreSQL, WordPress, and Framer.</li>
                            <li className='flex flex-row gap-2 items-start'> - Focused on improving UX/UI and enhancing SEO performance, directly contributing to increased user engagement and better search engine rankings. </li>
                            <li className='flex flex-row gap-2 items-start'> - Independently managed the full development lifecycle — from planning to deployment — demonstrating strong ownership and versatility.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Inner Divs */}
                <div className='flex flex-col sm:flex-row w-full sm:w-[90%] lg:w-[80%] h-[100%] gap-5 items-center sm:items-stretch'>
                    {/* Experience 2 */}
                    <motion.div
                        variants={fadeIn('left', 0, 1)}
                        initial="hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'tween' }}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.05 }}
                        className='bg-[#14212b] h-[100%] backdrop-blur-lg border-gray-700 border-1 overflow-clip hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 text-white p-8 rounded-lg w-[90%] sm:w-[50%]'>
                        <div className='absolute -top-5 -right-5 lg:-top-24 lg:-right-10 blur-lg lg:blur-2xl w-28 h-28 lg:h-48 lg:w-48 bg-linear-to-l from-[#C6FCA6] to-[#01fdd3] animate-spin rounded-full'></div>

                        <div>
                            <h1 className='text-2xl font-bold mb-3 pr-10'> Backend Development Intern </h1>
                            <h4 className='text-gray-300 mb-1 text-xs sm:text-base'> Legends Tech Solution · <span>On-site </span></h4>
                            <h4 className='text-gray-300 mb-4 text-xs sm:text-base'> Dec 2023 – Apr 2024 · India</h4>
                            <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                                <li className='flex flex-row gap-2 items-start'> - Engineered a Facial Landmark Detection and Paralysis Identification system using MobileNet and Deep CNN.</li>
                                <li className='flex flex-row gap-2 items-start'> - Integrated advanced image augmentation techniques and fine-tuned neural networks for more accurate diagnosis. </li>
                                <li className='flex flex-row gap-2 items-start'> - Played a key role in R&D, showcasing technical depth, team collaboration, and consistent delivery under tight deadlines.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Experience 3 */}
                    <motion.div
                        variants={fadeIn('right', 0, 1)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'tween' }}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.05 }}
                        className='bg-[#14212b] backdrop-blur-lg border-gray-700 border-1 overflow-clip hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 text-white p-8 rounded-lg w-[90%] sm:w-[50%]'>
                        <div className='absolute -top-5 -right-5 lg:-top-24 lg:-right-10 blur-lg lg:blur-2xl w-28 h-28 lg:h-48 lg:w-48 bg-linear-to-l from-[#C6FCA6] to-[#01fdd3] animate-spin rounded-full'></div>
                        <div>
                            <h1 className='text-2xl font-bold mb-3'> Cyber Security Intern </h1>
                            <h4 className='text-gray-300 mb-1 text-xs sm:text-base'> Cisco · <span>Remote</span></h4>
                            <h4 className='text-gray-300 mb-4 text-xs sm:text-base'> May 2023 – Jun 2023 · India </h4>
                            <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                                <li className='flex flex-row gap-2 items-start'> - Designed secure network environments from scratch while identifying vulnerabilities in real-world systems.</li>
                                <li className='flex flex-row gap-2 items-start'> - Gained hands-on experience with networking protocols like TCP/IP, VPNs, and firewall configurations.</li>
                                <li className='flex flex-row gap-2 items-start'> - Developed a strong foundational skill set in cyber threat detection and network hardening, contributing to safer digital infrastructures.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>


                {/* Experience 4 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'tween' }}
                    variants={fadeIn('up', 0, 1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.05 }}
                    className='bg-[#14212b] border-gray-700 border-1 overflow-clip hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 backdrop-blur-lg text-white p-8 rounded-lg w-[90%] lg:w-[80%]'>
                    <div className='absolute -top-5 -right-5 lg:-top-24 lg:-right-10 blur-lg md:blur-2xl lg:blur-3xl w-28 h-28 md:w-36 md:h-36 lg:h-52 lg:w-52 bg-linear-to-l from-[#C6FCA6] to-[#01fdd3] animate-spin rounded-full'></div>

                    <div>
                        <h1 className='text-2xl font-bold mb-3 pr-5'> Team Leader & Full Stack Developer </h1>
                        <h4 className='text-gray-300 mb-4 text-xs sm:text-base '> Finalist – Smart India Hackathon <span>Remote</span></h4>
                        <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                            <li className='flex flex-row gap-2 items-start'> - Pitched an original idea that led the team to be selected among the top 6 out of 170+ teams nationwide.</li>
                            <li className='flex flex-row gap-2 items-start'> - Led both frontend and backend development, ensuring smooth integration and a fully functional product under strict timelines. </li>
                            <li className='flex flex-row gap-2 items-start'> - Coordinated team efforts, delegated tasks efficiently, and presented the solution at the national-level finals, highlighting leadership, problem-solving, and technical execution.</li>
                        </ul>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Experience