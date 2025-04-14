import React from 'react'
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[90%] flex flex-col sm:w-[90%] py-5 border-t-1 border-gray-700'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-4 justify-between'>
                    <div>
                        <p className='text-gray-500 font-bold'>Created with ❤️ by <span className='text-white'>Sophas</span></p>
                    </div>
                    <div className='flex flex-row flex-wrap justify-center text-white items-center gap-5'>
                        <div className="flex items-center  gap-2">
                            <MdEmail className="w-5 h-5 text-gray-500" /> {/* e.g. from Lucide or Heroicons */}
                            <a href="mailto:sophaswork@gmail.com" className="hover:underline">sophaswork@gmail.com</a>
                            <MdArrowOutward />
                        </div>
                        <div className="flex items-center  gap-2">
                            <FaLinkedin className="w-5 h-5 text-gray-500" /> {/* e.g. from Lucide or Heroicons */}
                            <a href="https://www.linkedin.com/in/sophas/" target='_blank' className="hover:underline">LinkedIn</a>
                            <MdArrowOutward />
                        </div>
                        <div className="flex items-center  gap-2">
                            <FaGithubSquare className="w-5 h-5 text-gray-500" /> {/* e.g. from Lucide or Heroicons */}
                            <a href="mailto:sophaswork@gmail.com" target='_blank' className="hover:underline">Github</a>
                            <MdArrowOutward />
                        </div>
                        <div className="flex items-center  gap-2">
                            <AiFillInstagram className="w-5 h-5 text-gray-500" /> {/* e.g. from Lucide or Heroicons */}
                            <a href="mailto:sophaswork@gmail.com" target='_blank' className="hover:underline">Instagram</a>
                            <MdArrowOutward />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer