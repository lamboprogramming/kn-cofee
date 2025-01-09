'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

// Import Montserrat font
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const BlogNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={montserrat.className}>
      <nav className="block py-4 px-6 shadow-md w-full max-w-full rounded-none text-white bg-transparent ">
        <div className="container mx-auto flex items-center justify-between text-gray-900">
          {/* Logo and Social Links */}
          <div className="flex items-center md:space-x-8 ">
            <Link href="/blog" className="md:text-lg font-bold">
              Kiwi Nutz <span className="text-brown-600">Coffee</span>
            </Link>
            <div className="flex  ml-3 space-x-4 ">
              <Link
                href="https://www.instagram.com/kiwinutzcoffee/"
                className="text-pink-700 text-xl"
              >
                <FaSquareInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/people/Kiwi-Nutz-Coffee/61570572638619/"
                className="text-blue-700 text-xl"
              >
                <FaFacebookSquare />
              </Link>
              <Link
                href="https://www.linkedin.com/company/kiwi-nutz-coffee/"
                className="text-blue-500 text-xl"
              >
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/">
              <button className="bg-orange-900/90 text-white text-xs py-3 px-6 rounded-lg">
                Kiwi Nutz Site
              </button>
            </Link>
            <Link href="/coffee-blog">
              <button className="bg-blue-900 text-white text-xs py-3 px-6 rounded-lg">
                Blog Home
              </button>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-8 h-8 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Collapsible Menu */}
        {menuOpen && (
          <div className="mt-4 bg-white text-gray-900 rounded-lg shadow-lg lg:hidden">
            <ul className="flex flex-col space-y-2 py-4 px-6">
              <li>
                <Link href="/">
                  <button className="w-full text-left bg-orange-900/90 text-white text-xs py-3 px-6 rounded-lg">
                    Kiwi Nutz Site
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/coffee-blog">
                  <button className="w-full text-left bg-blue-900 text-white text-xs py-3 px-6 rounded-lg">
                    Blog Home
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BlogNav;
