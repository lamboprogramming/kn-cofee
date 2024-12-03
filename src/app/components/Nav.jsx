"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/vector.svg';



export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <>
    <nav 
    className="relative opacity-90"
    style={{ 
      backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      minHeight: '100vh',
      
    }}
  >
  
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto bg-black bg-opacity-40 backdrop-blur-sm">
        
        {/* Logo */}
        <a href="/" className="flex items-center p-2 space-x-3 rtl:space-x-reverse">
        <Image 
        src={Logo} 
        alt="company logo image of kiwi bird and coffee beans with faces" 
        width={250} 
        height={50} 
        priority={true}
        sizes="(max-width: 768px) 200px, 250px" 
        quality={75} 
        style={{ width: '100%', height: 'auto' }}
      />
        </a>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 m-2 text-sm text-white rounded-lg md:hidden hover:bg-brown-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
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
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default ">
          <ul className="flex flex-col p-4 m-8 mt-4 text-lg font-bold border border-gray-100 rounded-lg text-brown-50 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="/" className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0">
                Home
              </a>
            </li>
            <li>
              <a href="#about"  className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 ">
                About Us
              </a>
            </li>
      
            <li>
              <a href="#services" className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 ">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 ">
                Testimonials
              </a>
            </li>
        
            <li className='#contact'>
              <a href="#contact" className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0 ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>


    </nav>
    </>
    
  );
}
