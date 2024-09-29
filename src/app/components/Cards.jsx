"use client";
import React from 'react';
import { GiCoffeeBeans } from "react-icons/gi";
import { HiCheckBadge } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";
import { FaMoneyBill1Wave } from "react-icons/fa6";

export default function Cards() {
  return (
    <>
      {/* Cards start */}
      <div className='mt-8 mb-8 bg-brown-400'>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Card 1/4 */}
            <div className="max-w-md p-4 bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b37e56]">
                <FaMoneyBill1Wave className='text-4xl' />
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-5 sm:text-xl lg:text-2xl">No Risk, All Reward.</h6>
              <p className="mb-3 text-sm font-medium leading-9 tracking-wider text-gray-900 sm:text-base lg:text-lg">
                We do things differently—no contracts, no hassle. We believe in earning your loyalty each and every month.
              </p>
            </div>

            {/* Card 2/4 */}
            <div className="max-w-md p-4 bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b37e56]">
                <GiCoffeeBeans className='text-4xl' />
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-5 sm:text-xl lg:text-2xl">Café-Quality Coffee</h6>
              <p className="mb-3 text-sm font-medium leading-9 tracking-wider text-gray-900 sm:text-base lg:text-lg">
                Sourced from the finest Arabica beans from New Zealand, Brazil, and Colombia, our coffee is roasted to perfection and delivered fresh to your workplace.
              </p>
            </div>

            {/* Card 3/4 */}
            <div className="max-w-md p-4 bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b37e56]">
                <GrServices className='text-4xl' />
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-5 sm:text-xl lg:text-2xl">Dynamic Coffee Machines</h6>
              <p className="mb-3 text-sm font-medium text-gray-900 tracking9-wider leading- sm:text-base lg:text-lg">
                We are committed to sustainability by providing state-of-the-art, whole bean machines that brew with fresh milk—never powdered—to give your team the ultimate coffee experience.
              </p>
            </div>

            {/* Card 4/4 */}
            <div className="max-w-md p-4 bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#b37e56]">
                <HiCheckBadge className='text-4xl' />
              </div>
              <h6 className="mb-2 text-lg font-semibold leading-5 sm:text-xl lg:text-2xl">Hassle-Free Maintenance</h6>
              <p className="mb-3 text-sm font-medium leading-9 tracking-wider text-gray-900 sm:text-base lg:text-lg">
                We provide regular maintenance and servicing free-of-charge. Our goal is to ensure your equipment is always clean, in great condition, and ready to brew.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
