import React from 'react'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <header className='h-16 shadow-sm flex items-center'>
      <nav className='flex justify-between items-center w-9/12 mx-auto'>
        <a href="/">
          <img src={logo} alt='logo'/>
        </a>

        <div className='flex space-x-5 items-center'>
          <ul className='sm:flex items-center space-x-5 hidden'>
            <li><a href="/">How it works</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">About Us</a></li>
          </ul>

          <button className='px-5 py-1 border bg-yellow-800 rounded-full font-medium hover:border-yellow-400
           hover:bg-green-600 transition-all duration-300 text-white'>Get Started</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar