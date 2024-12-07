import React, { useState } from 'react';
import { MdCoffeeMaker } from "react-icons/md";
import { GiCoffeeBeans } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoHammer } from "react-icons/io5";


export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='bg-brown-900 min-w-[250px]' id="services">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
        
   

        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <p className="text-3xl leading-relaxed tracking-wide text-white md:text-4xl">
            Office coffee made simple, affordable, and hassle-free for businesses.
          </p>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed bottom-0 left-0 w-full bg-brown-900 p-4 transition-transform ${menuOpen ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
          <div className="grid gap-4">
            <div className="flex items-center justify-center">
              <MdCoffeeMaker className='text-4xl text-white' />
              <span className="ml-4 text-white">Free Coffee Machine</span>
            </div>
            <div className="flex items-center justify-center">
              <GiCoffeeBeans className='text-4xl text-white' />
              <span className="ml-4 text-white">Free Coffee Beans</span>
            </div>
            <div className="flex items-center justify-center">
              <IoHammer className='text-4xl text-white' />
              <span className="ml-4 text-white">Free Maintenance</span>
            </div>
            <div className="flex items-center justify-center">
              <FaMoneyBillAlt className='text-4xl text-white' />
              <span className="ml-4 text-white">Simple Pricing Policy</span>
            </div>
          </div>
        </div>

        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brown-100">
                <MdCoffeeMaker className='text-4xl' />
              </div>
            </div>
            <div>
              <h6 className="mb-4 text-xl font-bold leading-5 tracking-wide underline text-brown-50 underline-offset-8 decoration-orange-800">Free Coffee Machine</h6>
              <p className="mb-3 text-lg tracking-wide text-white">
                We provide a fully automatic coffee machine to your business at no cost. Enjoy the convenience of a high-quality coffee machine without the expense.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brown-100">
                <GiCoffeeBeans className='text-4xl' />
              </div>
            </div>
            <div>
              <h6 className="mb-4 text-xl font-bold leading-5 tracking-wide underline text-brown-50 underline-offset-8 decoration-orange-800">
                Free Coffee Beans
              </h6>
              <p className="mb-3 text-lg tracking-wide text-white">
                Get fresh, aromatic coffee beans delivered regularly, straight to your door at no cost. We make sure your machine is always ready to brew for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brown-100">
                <IoHammer className='text-4xl' />
              </div>
            </div>
            <div>
              <h6 className="mb-4 text-xl font-bold leading-5 tracking-wide underline text-brown-50 underline-offset-8 decoration-orange-800">
                Free Maintenance
              </h6>
              <p className="mb-3 text-lg tracking-wide text-white">
                Leave the regular maintenance and servicing of the machine up to us at no additional cost. Focus on enjoying coffee without worrying about any hidden fees.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-brown-100">
                <FaMoneyBillAlt className='text-4xl' />
              </div>
            </div>
            <div>
              <h6 className="mb-4 text-xl font-bold leading-5 tracking-wide underline text-brown-50 underline-offset-8 decoration-orange-800">
                Simple Pricing Policy
              </h6>
              <p className="mb-3 text-lg tracking-wide text-white">
                Our pricing plans are specifically tailored to accommodate your personal needs. And yes, you read that correctly, machines, beans, and servicing are all included at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
