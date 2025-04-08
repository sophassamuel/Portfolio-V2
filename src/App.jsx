import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-primary-light dark:bg-primary-dark'>
      <Navbar/>
    </div>
    </>
  )
}

export default App
