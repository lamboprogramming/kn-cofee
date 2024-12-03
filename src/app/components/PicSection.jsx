import React from 'react';
import Image from 'next/image';
import img from '../../../public/pic1.jpeg'
export default function PicSection() {
  return (
    <>
    <div className='' id='contact'>
        <Image
          className="object-cover w-full h-56 sm:h-96"
          src={img}
          alt="group in office raising fists in celebration"
        />
   
 
    </div>
    </>
  );
}
