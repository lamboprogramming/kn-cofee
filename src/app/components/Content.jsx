"use client";
import React, {useState} from 'react';

export default function Content() {
  return (
    <div className='pt-4 sm:pt-0' id='content'>
      <div className="px-4 mx-auto mt-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      {/* Tagline */}
        <div className="max-w-xl mb-10 text-center md:mx-auto lg:max-w-2xl md:mb-12">
          
          <p className="text-2xl leading-relaxed text-gray-700 md:text-4xl">
            Try us <span className='font-bold text-orange-800'>FREE</span> for two full weeks
          </p>
        </div>
        
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.unsplash.com/photo-1482273326129-33adc184ab8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwZGlzcG9zYWJsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://st2.depositphotos.com/1970689/5224/i/450/depositphotos_52246287-stock-photo-espresso-maker.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 text-lg font-semibold leading-6 text-orange-800">
              Quality Beans, Exceptional Flavor
              </h6>
              <p className="text-base leading-relaxed text-gray-900">
              Kiwi Nutz coffee is crafted from the highest quality beans. Our signature blend is sourced from Columbia, Brazil and Ethiopia – the home of coffee. If our signature blend isn’t up to standard – we will provide alternatives to suit.
              </p>
            </div>
  
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 text-lg font-semibold leading-6 text-orange-800">
              Bold Flavor, Endless Variety
              </h6>
              <p className="text-base leading-relaxed text-gray-900">
              Our machines offer a wide range of brewing options to suit every palate—from rich espressos to smooth lattes. With Kiwi Nutz, you'll never run out of choices and we can cater to every unique coffee craving.
              </p>
            </div>

            <div className='pb-4 mb-4 border-b'>
              <h6 className="mb-2 text-lg font-semibold leading-6 text-orange-800 ">
                Convenient, Time-Saving Coffee at Work
              </h6>
              <p className="text-base leading-relaxed text-gray-900">
                Skip the coffee shop lines and save precious time at the office! With our coffee machines, enjoy premium coffee with zero wait, boost productivity, and foster a thriving environment.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
