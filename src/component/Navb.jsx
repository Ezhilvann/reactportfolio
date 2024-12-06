import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themehandle } from '../App';

function Nav() {
  const dark=useContext(themehandle);
  return (
<div className={`flex items-center gap-3 mx-4 my-2 ${dark?"bg-black text-white":"bg-white text-black"}`}>
  <p className="relative group overflow-hidden">
    <Link
      to="/" 
      className="block p-3 relative z-20 transition-all duration-500 ease-in-out group-hover:text-white"
    >
      Home
    </Link>
    <span className="absolute inset-0 bg-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
  </p>
  <p className="relative group overflow-hidden">
    <Link
      to="/project"
      className="block p-3 relative z-20 transition-all duration-500 ease-in-out group-hover:text-white"
    >
      Project
    </Link>
    <span className="absolute inset-0 bg-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
  </p>
  <p className="relative group overflow-hidden">
    <Link
      to="/skills"
      className="block p-3 relative z-20 transition-all duration-500 ease-in-out group-hover:text-white"
    >
      Skills
    </Link>
    <span className="absolute inset-0 bg-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
  </p>
  <p className="relative group overflow-hidden">
    <Link
      to="/achieve" 
      className="block p-3 relative z-20 transition-all duration-500 ease-in-out group-hover:text-white"
    >
      Achievement
    </Link>
    <span className="absolute inset-0 bg-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"></span>
  </p>
</div>


  
  )
}

export default Nav;