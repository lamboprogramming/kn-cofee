import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/knvector.svg'
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <div className='min-w-[250px]'>
    <footer className="flex flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-evenly">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 Kiwi Nutz Coffee Company
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-800 focus:text-orange-800"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-800 focus:text-orange-800"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#contact"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-800 focus:text-orange-800"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
    </div>
  );
}
