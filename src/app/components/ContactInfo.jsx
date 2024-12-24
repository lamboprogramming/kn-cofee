import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

export default function ContactInfo() {
  return (
    <div className='pt-2 '>
      <div className="flex sm:flex-col items-center justify-center mt-4 space-y-0.5 sm:mt-4 gap-4 ">

        <div className="flex items-center space-x-0.5 font-serif font-thin tracking-wider text-blue-900 text-sm gap-0.5  ">
          <div className='text-xs'><FaPhoneAlt /></div>
          
          <div className='ml-4'>(888)-542-5855</div>
          </div>

          <div className="flex items-center space-x-0.5 font-serif font-thin tracking-wider text-blue-900 text-sm gap-0.5">
            <div className='text-xs'><MdEmail /></div>
          
          <Link href="mailto:Support@kiwinutzcoffee.com" className='cursor-pointer'>
            <div>Support@kiwinutzcoffee.com</div>
          </Link>
        </div>

        
        
      </div>
    </div>
  );
}
