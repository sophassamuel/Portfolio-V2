import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='bg-primary-light dark:bg-primary-dark'>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default MainLayout