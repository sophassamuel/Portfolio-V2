import React from 'react'
import ThemeToggle from '../utils/WebsiteThemeToggle'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/Animations/fadeIn'

const Navbar = () => {
    return (
        <div className="w-full flex p-4 justify-center">
            <motion.div
                variants={fadeIn('down', 0, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.05 }}
                className="flex p-3 px-6 rounded-full backdrop-blur-md bg-white/70 dark:bg-gray-900 border border-gray-300/20 antialiased dark:border-white/20 shadow-md items-center gap-6">
                <nav>
                    <ul className="flex text-sm  text-black dark:text-white font-semibold flex-row gap-8">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="hover:underline"
                            >
                                About Me
                            </Link>

                        </li>
                        <li>
                            <Link
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="hover:underline"
                            >
                                Publications
                            </Link>

                        </li>
                        <li className=''>
                            <Link to="/projects" className="hover:underline">Projects</Link>
                        </li>
                        <li className='hidden'>
                            <Link to="/certifications" className="hover:underline">Certifications</Link>
                        </li>
                    </ul>
                </nav>

                {/* <ThemeToggle /> */}
            </motion.div>
        </div>
    )
}

export default Navbar
