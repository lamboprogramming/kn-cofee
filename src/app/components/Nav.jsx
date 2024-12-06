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
    <>
      <nav
        className="relative opacity-90 overflow-hidden max-w-full"
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Flex container for logo and hamburger menu */}
        <div className="flex items-center justify-evenly z-10 mx-auto bg-black bg-opacity-40 backdrop-blur-sm">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="company logo image of kiwi bird and coffee beans with faces"
              priority={true}
              sizes="(max-width: 768px) 200px, 250px"
              quality={75}
              style={{ width: '100%', height: 'auto' }}
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
          className={`overflow-x-hidden md:hidden absolute left-1/2 transform -translate-x-1/2 w-full p-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-[300px] opacity-100' : 'top-[-200px] opacity-0 pointer-events-none'} backdrop-blur-sm bg-black bg-opacity-50 border border-brown-600`}
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
    </>
  );
}
