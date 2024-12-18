import React from 'react';
import Image from 'next/image';
import Tagline from './Tagline';
import h1 from '../../../public/hero1.jpeg'
import h2 from '../../../public/hero2.jpeg'
import h3 from '../../../public/hero3.jpeg'


export default function Hero() {
  return (
    <div className='mb-12 sm:mb-8' id="about">
      <div className="px-4 py-4 m-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">

   

        {/* Start of About Us */}

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <Tagline />
              <p className="mb-6 text-lg leading-8 tracking-widest text-center gray-700 md:text-xl">
                A New Zealand coffee company right here in the United States. Tell &apos;em he&apos;s dreaming!
              </p>
              <p className="text-lg leading-9 tracking-wider text-center gray-700 md:text-xl">
                We believe great coffee fuels great ideas. Our <span className='font-semibold text-orange-800'>corporate</span> coffee solutions ignite creativity and collaboration.
              </p>
            </div>
          </div>

          {/* Pictures */}
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <Image
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src={h1}
                alt="coffee beans being roasted"
              />
              <Image
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src={h2}
                alt="cup of coffee in white glass and croissant"
              />
            </div>
            <div className="px-3">
              <Image
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src={h3}
                alt="group of people in office drinking coffee and socializing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
