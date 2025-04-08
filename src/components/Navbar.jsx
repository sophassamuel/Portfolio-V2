import React from 'react'
import ThemeToggle from '../utils/WebsiteThemeToggle'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="w-full flex p-4 justify-center">
            <div className="flex p-3 px-6 rounded-full backdrop-blur-md bg-white/10 dark:bg-black/10 border border-gray-300/20 dark:border-white/20 shadow-md items-center gap-6">
                <nav>
                    <ul className="flex text-sm text-black dark:text-white flex-row gap-8">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">About Me</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">Publications</Link>
                        </li>
                        <li>
                            <Link to="/publications" className="hover:underline">Certifications</Link>
                        </li>
                    </ul>
                </nav>

                <ThemeToggle />
            </div>
        </div>
    )
}

export default Navbar
