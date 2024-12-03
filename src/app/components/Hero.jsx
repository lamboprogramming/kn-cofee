import React from 'react';
import Image from 'next/image';
import Tagline from './Tagline';

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
                A New Zealand coffee company right here in the United States – tell ‘em he’s dreaming!
              </p>
              <p className="text-lg leading-9 tracking-wider text-center gray-700 md:text-xl">
                We believes that great coffee fuels great ideas. Specializing in providing premium <span className='font-semibold text-orange-800'>corporate</span> coffee solutions, we ensure that every cup served ignites creativity and collaboration.
              </p>
            </div>
          </div>

          {/* Pictures */}
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="coffee beans being roasted"
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://images.unsplash.com/photo-1664139694630-c9eaccd84765?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZmZlZSUyMGJyZWFrfGVufDB8fDB8fHwy"
                alt="cup of coffee in white glass and croissant"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt="group of people in office drinking coffee and socializing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
