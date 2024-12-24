'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { LuCircleArrowRight } from "react-icons/lu";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const BlogNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="block py-4 px-8 shadow-md w-full max-w-full rounded-none text-white bg-transparent">
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          <div
            href="#"
            className="block antialiased font-sans leading-relaxed text-blue-gray-900 mr-4 cursor-pointer text-lg font-bold"
          >
            <div className='flex flex-row'>
            Kiwi Nutz Coffee 

            <div className=' ml-4 '>

            <div className='flex mt-1 space-x-6'>
              <Link href="https://www.instagram.com/kiwinutzcoffee/p/DDuguHEJ0vz/" className=' text-pink-700'>
              <FaSquareInstagram/>
              </Link>

              <Link href="https://www.facebook.com/people/Kiwi-Nutz-Coffee/61570572638619/" className=' text-blue-700'> 
                <FaFacebookSquare />
              </Link>
              <Link href="https://www.linkedin.com/in/stu-mills-749b892a/" className='text-blue-500'> 
                <IoLogoLinkedin/>
              </Link>

            </div>

            </div>
            
            
            </div>
            

          </div>
   
          <Link href="/blog">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50
             disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md
              shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hidden lg:inline-block bg-blue-900"
            type="button"
          >
            Blog Home
          </button>
          </Link>
          <Link href="/">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-900/90 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 hidden lg:inline-block"
            type="button"
          >
            Kiwi Nutz Site
          </button>
          </Link>
          

          {/* Hamburger button */}
          <button
            onClick={toggleMenu}
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 ml-auto inline-block text-blue-gray-900 lg:hidden"
            type="button"
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        {/* Collapsible menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in ${
            menuOpen ? 'block h-auto' : 'hidden h-0'
          }`}
        >
          <div className="mt-2 rounded-xl bg-white py-2">
            <ul className="mb-4 mt-2 flex flex-col gap-3">
            <Link href="/blog">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-blue-900 block w-full mb-2"
              type="button"
            >
              Blog Home 
            </button>
            </Link>
         
            </ul>
            <Link href="/">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-orange-900/90 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 block w-full mb-2"
              type="button"
            >
              Kiwi Nutz Site 
            </button>
            </Link>
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BlogNav;
