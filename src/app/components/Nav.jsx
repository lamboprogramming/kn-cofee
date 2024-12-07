'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/vector.svg';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      <nav
        className="relative opacity-90 "
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100',
        
          
        }}
      >
        {/* Flex container for logo and hamburger menu */}
        <div className="min-w-[250px] flex items-center justify-between z-10 mx-auto bg-black bg-opacity-40 backdrop-blur-sm overflow-hidden">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 p-4">
            <Image
              src={Logo}
              alt="company logo image of kiwi bird and coffee beans with faces"
              priority={true}
              sizes="(max-width: 1600px) 150px, (max-width: 1024px) 200px, 250px"
              quality={75}
              className="w-44"

            />
          </a>
          
          {/* Desktop Menu - This is shown on md and higher */}
          <div className="hidden md:flex  p-6">
            <ul className="flex space-x-8 text-lg font-bold text-brown-50">
              <li>
                <a
                  href="/"
                  className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#content"
                  className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button - Shown on small screens only */}
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
        </div>

        {/* Mobile Menu - Positioned below the navbar */}
        <div
  className={`absolute left-0 w-full bg-black bg-opacity-50 p-4 transform transition-all duration-200 ease-in-out z-50 ${
    isMenuOpen
      ? 'top-[13rem] opacity-100 visible'
      : '-top-full opacity-0 invisible'
  }`}
>
          <ul className="flex flex-col text-lg font-bold text-brown-50 space-y-4">
            <li>
              <a
                href="/"
                className="sm:block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="sm:block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#content"
                className="sm:block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="sm:block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="sm:block px-3 py-2 rounded hover:text-orange-800 md:hover:bg-transparent md:border-0 md:hover:text-orange-800 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

{/*
  
  
  
  
  
  */}