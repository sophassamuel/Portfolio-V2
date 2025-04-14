import React from 'react'
import Title from '../components/Title'
import { FaCircleRight } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className='flex flex-col items-center w-full py-10'>
        <Title
        small={'Experience'}
        main={'Where I’ve Grown and Contributed'}
        sub={'A look at the roles, teams, and challenges that shaped my journey so far.'}
        />

        <div className='flex flex-col w-full lg:w-[80%] gap-5 items-center py-10'>

            {/* Experience 1 */}
            <div className='bg-[#14212b] border-gray-700 border-1 hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 backdrop-blur-lg text-white p-8 rounded-lg w-[90%] lg:w-[80%]'>
                <h1 className='text-2xl font-bold mb-3'> Full Stack Engineer </h1>
                <h4 className='text-gray-300 mb-1 text-xs sm:text-base '> Freelance (Self-Employed) · <span>Remote</span></h4>
                <h4 className='text-gray-300 mb-4 text-xs sm:text-base'> Aug 2024 – Present · Puducherry, India </h4>
                <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                    <li className='flex flex-row gap-2 items-start'> - Built and deployed full-stack applications using React.js, Node.js, Express.js, Django, PostgreSQL, WordPress, and Framer.</li>
                    <li className='flex flex-row gap-2 items-start'> - Focused on improving UX/UI and enhancing SEO performance, directly contributing to increased user engagement and better search engine rankings. </li>
                    <li className='flex flex-row gap-2 items-start'> - Independently managed the full development lifecycle — from planning to deployment — demonstrating strong ownership and versatility.</li>
                </ul>
            </div>

            {/* Inner Divs */}
            <div className='flex flex-col sm:flex-row w-full sm:w-[90%] lg:w-[80%] h-[100%] gap-5 items-center sm:items-stretch'>
            {/* Experience 2 */}
            <div className='bg-[#14212b] h-[100%] backdrop-blur-lg border-gray-700 border-1 hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 text-white p-8 rounded-lg w-[90%] sm:w-[50%]'>
                <h1 className='text-2xl font-bold mb-3'> Backend Development Intern </h1>
                <h4 className='text-gray-300 mb-1 text-xs sm:text-base'> Legends Tech Solution · <span>On-site </span></h4>
                <h4 className='text-gray-300 mb-4 text-xs sm:text-base'> Dec 2023 – Apr 2024 · India</h4>
                <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                    <li className='flex flex-row gap-2 items-start'> - Engineered a Facial Landmark Detection and Paralysis Identification system using MobileNet and Deep CNN.</li>
                    <li className='flex flex-row gap-2 items-start'> - Integrated advanced image augmentation techniques and fine-tuned neural networks for more accurate diagnosis. </li>
                    <li className='flex flex-row gap-2 items-start'> - Played a key role in R&D, showcasing technical depth, team collaboration, and consistent delivery under tight deadlines.</li>
                </ul>
            </div>

            {/* Experience 3 */}
            <div className='bg-[#14212b] backdrop-blur-lg border-gray-700 border-1 hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 text-white p-8 rounded-lg w-[90%] sm:w-[50%]'>
                <h1 className='text-2xl font-bold mb-3'> Cyber Security Intern </h1>
                <h4 className='text-gray-300 mb-1 text-xs sm:text-base'> Cisco · <span>Remote</span></h4>
                <h4 className='text-gray-300 mb-4 text-xs sm:text-base'> May 2023 – Jun 2023 · India </h4>
                <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                    <li className='flex flex-row gap-2 items-start'> - Designed secure network environments from scratch while identifying vulnerabilities in real-world systems.</li>
                    <li className='flex flex-row gap-2 items-start'> - Gained hands-on experience with networking protocols like TCP/IP, VPNs, and firewall configurations.</li>
                    <li className='flex flex-row gap-2 items-start'> - Developed a strong foundational skill set in cyber threat detection and network hardening, contributing to safer digital infrastructures.</li>
                </ul>
            </div>
            </div>


            {/* Experience 4 */}
            <div className='bg-[#14212b] border-gray-700 border-1 hover:border-b-green-500 hover:border-r-green-500 shadow-md shadow-green-950 backdrop-blur-lg text-white p-8 rounded-lg w-[90%] lg:w-[80%]'>
                <h1 className='text-2xl font-bold mb-3'> Team Leader & Full Stack Developer </h1>
                <h4 className='text-gray-300 mb-4 text-xs sm:text-base '> Finalist – Smart India Hackathon <span>Remote</span></h4>
                <ul className='flex flex-col gap-3 text-xs sm:text-sm'>
                    <li className='flex flex-row gap-2 items-start'> - Pitched an original idea that led the team to be selected among the top 6 out of 170+ teams nationwide.</li>
                    <li className='flex flex-row gap-2 items-start'> - Led both frontend and backend development, ensuring smooth integration and a fully functional product under strict timelines. </li>
                    <li className='flex flex-row gap-2 items-start'> - Coordinated team efforts, delegated tasks efficiently, and presented the solution at the national-level finals, highlighting leadership, problem-solving, and technical execution.</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Experience