"use client";
import React from 'react';
import Image from 'next/image';
import c1 from '../../../public/content1.jpeg'
import c2 from '../../../public/content2.jpeg'
import c3 from '../../../public/content3.jpg'

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
            <Image
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={c1}
              alt="coffee beans and ground beans"
            />
            <Image
              className="object-cover w-full h-48 rounded shadow-lg"
              src={c2}
              alt="white disposable coffee cup with lid"
            />
            <Image
              className="object-cover w-full h-48 rounded shadow-lg"
              src={c3}
              alt="coffee machine pouring coffee into white glass cup"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 text-lg font-semibold leading-6 text-orange-800">
              Quality Beans, Exceptional Flavor
              </h6>
              <p className="text-base leading-relaxed text-gray-900">
              Kiwi Nutz coffee is crafted from the highest quality beans. Our signature blends are sourced from Columbia, Brazil and Ethiopia – the homes of coffee.
              </p>
            </div>
  
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 text-lg font-semibold leading-6 text-orange-800">
              Bold Flavor, Endless Variety
              </h6>
              <p className="text-base leading-relaxed text-gray-900">
              Our machines offer a wide range of brewing options to suit every palate—from rich espressos to smooth lattes. With Kiwi Nutz, you&apos;ll never run out of choices and we can cater to every unique coffee craving.
              </p>
            </div>

            <div className='pb-4 mb-4 border-b'>
              <h6 className="mb-2 text-lg font-semibold leading-6 text-orange-800 ">
                Coffee convenience at the office
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
