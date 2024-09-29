"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Logo from '../../../public/vector.svg'

export default function Test() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

<>
    <section
    className="relative bg-[url(https://images.unsplash.com/photo-1537130508299-46ab547b4be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfDB8MHx8fDI%3D)] bg-cover bg-center bg-no-repeat"
    >
    <nav className="border-b-2 dark:bg-gray-900 border-brown-300">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto ">
  
  {/* Logo */}
  <a href="/" className="flex items-center p-2 space-x-3 rtl:space-x-reverse ">
    <Image src={Logo} alt="company logo" width={170} height={50} />
  </a>

  {/* Mobile Menu Button */}
  <button
    data-collapse-toggle="navbar-default"
    type="button"
    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-default"
    aria-expanded={isMenuOpen}
    onClick={toggleMenu}
  >
    <span className="sr-only">Open main menu</span>
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      {isMenuOpen ? (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      )}
    </svg>
  </button>

  {/* Desktop & Mobile Menu */}
  <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
    <ul className="flex flex-col p-4 mt-4 font-semibold border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block px-3 py-2 text-gray-900 rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-orange-800">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          About
        </a>
      </li>
      <li>
        <a href="/kiwinutz/src/app/components/Services.jsx" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Services
        </a>
      </li>
      <li>
        <a href="#pricing" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Pricing
        </a>
      </li>
      <li>
        <a href="#contact" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Contact
        </a>
      </li>
    </ul>
  </div>
    </div>

{/* Centered Slogan */}
<div className="mb-8 text-center text-transparent bg-gray-800 bg-clip-text">
  <span className="block text-lg font-semibold md:text-2xl whitespace-nowrap dark:text-white">
    " Kiwi Nutz: Sip Nutty, Live Boldly "
  </span>
</div>
</nav>
<div
  className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
></div>

<div
  className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
>

</div>
</section>
           
   
        </>
      );
    }
    
    

