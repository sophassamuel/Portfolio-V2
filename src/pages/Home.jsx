import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Publications from '../sections/Publications'
import Experience from '../sections/Experience'

const HomePage = () => {
  return (

    <>
        <Hero/>
        <About />
        <Projects/>
        <Publications />
        <Experience/>
    </>
  )
}

export default HomePage