import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <div className='mt-5'>
       {/* Contact Info */}
       <div className="items-center justify-center mt-6 mb-12 sm:space-x-8">
       <div className="flex items-center justify-center space-x-2 font-serif text-2xl font-bold tracking-wide text-brown-900">
         <FaPhoneAlt className="" />
         <span>(888) 542 - 5855</span>
       </div>
       <div className="flex items-center justify-center mt-6 space-x-2 font-serif text-2xl font-bold tracking-wider text-brown-900 ">
         <MdEmail className="" />
         <Link href="mailto:Support@kiwinutzcoffee.com">
         <span>Support@kiwinutzcoffee.com</span>
         </Link>
       </div>
     </div>
     </div>
  );
}
