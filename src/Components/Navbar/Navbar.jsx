import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

   let [ scrolll , setScrolll ] = useState(false)


   function handleScrolll(){

    if( window.scrollY > 10 ){
      setScrolll(true)
    }else{
      setScrolll(false)
    }

   }

   addEventListener("scroll" , handleScrolll)
  
    return (

        <>

        

<nav className = {` z-50 bg-mainColor fixed top-0 left-0 right-0 ${scrolll ? "py-1" : "py-3"} text-white transition-all duration-700 
 border-gray-200 dark:bg-gray-900 dark:border-gray-700 ` }>

  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-3xl font-bold uppercase whitespace-nowrap dark:text-white">Start Framework</span>
    </Link>
  

    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
  
      <span className="sr-only">Open main menu</span>
  
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
  
    </button>
  

    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
  
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  
        <li>
          <NavLink to="" className="block py-1 px-3 rounded-md  md:border-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">HOME</NavLink>
        </li>
  
        <li>
          <NavLink to="about" className="block py-1 px-3  rounded-md  md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT</NavLink>
        </li>
  
        <li>
          <NavLink to="portfolio" className="block py-1 px-3  rounded-md  md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PORTFOLIO</NavLink>
        </li>
  
        <li>
          <NavLink to="contact" className="block py-1 px-3  rounded-md  md:border-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</NavLink>
        </li>
  
      </ul>
  
    </div>
  
  </div>

</nav>


      



        </>
  )

}
