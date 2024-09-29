import React from 'react';
import Image from 'next/image';
import { Typography } from "@material-tailwind/react";
import Logo from '../../../public/vector.svg'

export default function Footer() {
  return (
    <>
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="sm:col-span-2">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <Image src={Logo} alt="company logo"  className='w-20' />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
           
          </span>
        </a>
      
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-base font-bold tracking-wide text-gray-900">
          Contacts
        </p>
        <div className="flex">
          <p className="mr-1 text-gray-800">Phone:</p>
          <a
            href="tel:850-123-5021"
            aria-label="Our phone"
            title="Our phone"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
          646-341-7002
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-800">Email:</p>
          <a
            href="mailto:info@lorem.mail"
            aria-label="Our email"
            title="Our email"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Support@kiwinutzcoffee.com
          </a>
        </div>
        <div className="flex">
          <p className="mr-1 text-gray-800">Address:</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our address"
            title="Our address"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            312 Lovely Street, NJ
          </a>
        </div>
      </div>
     
    </div>
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
      <p className="text-sm text-gray-600">
        © Copyright 2024 Kiwi Nutz Coffee. All rights reserved.
      </p>
      <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            F.A.Q
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="/"
            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
    </div>
      
    </div>
    </>
  );
}
