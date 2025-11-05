import React from 'react'
import Footer from './Footer'

function Navbar() {
    const menu =(
        <>
        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100'>HOME</li>
        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100'>TV SHOW</li>
        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100'>MOVIES</li>
        <li className='hover:text-sky-400 active:text-red-500 transition-all duration-100'>NEW</li>
        </>
      
    )
  return (
  <>
  <div className="navbar shadow-md bg-black/40 backdrop-blur-md fixed top-0 left-0 right-0 z-100 font-monts">
    <div className='w-11/12 mx-auto flex justify-between items-center min-w-[280px]'>
         <div className="navbar-start">
     <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
       </div>
       <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  bg-black/40 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow">
        {menu}
        </ul>
    </div>
    <div className='flex gap-10 justify-between items-center'>
         <p className=" text-2xl text-yellow-400 font-grif">DRAMATIC</p>
         <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6 items-center">
                {menu}
            </ul>
         </div>
    </div>
   
    </div>

  

    <div className="navbar-end flex gap-6 items-center">
        <label className="flex gap-0.5 lg:gap-2 bg-white/10 border border-transparent focus-within:border-yellow-400 transition duration-300 px-3 py-2 items-center rounded-full w-12 md:w-40 lg:w-60   ">
           <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
        >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
            </g>
        </svg>
          <input type="search" required placeholder="Search" className='bg-transparent outline-none hidden md:block lg:block' />
         </label>

        <div className="avatar">
        <div className="ring-yellow-400 ring-offset-black/40 rounded-full ring-2 ring-offset-2 w-8">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"/>
        </div>
        </div>
        
    </div>
    </div>
   
  </div>
</>
  )
}

export default Navbar
