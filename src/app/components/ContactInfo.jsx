import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <div className='mt-4'>
      {/* Contact Info */}
      <div className="flex flex-col items-center justify-center mt-4 mb-6 space-y-4 sm:mt-8 sm:flex-row sm:space-x-8 sm:space-y-0">
        <div className="flex items-center mb-4 space-x-2 font-serif text-lg font-bold tracking-wide sm:mb-0 text-brown-900">
          <FaPhoneAlt />
          <span>(888) 542 - 5855</span>
        </div>
        
        <div className="flex items-center space-x-2 font-serif text-lg tracking-wider text-brown-900">
          <MdEmail />
          <Link href="mailto:Support@kiwinutzcoffee.com">
            <span>Support@kiwinutzcoffee.com</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
