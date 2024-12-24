'use client';
import React from 'react';
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { Typography } from "@material-tailwind/react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full text-center py-8 flex items-center justify-center">
      <button
        onClick={scrollToTop}
        className=" gap-2 text-black font-medium hover:text-gray-500   "
      >
        <IoArrowUpCircleSharp className="flex text-4xl items-center justify-center" />
       
      </button>
    </div>
  );
};

export default function Footer() {
  return (
    <>
       {/* Back to Top Link */}
       <div className="min-w-[250px] bg-transparent text-black">
        <BackToTop />
       </div>
      
      {/* Footer Section */}
      <div
        className="relative opacity-90 "
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
        }}
      >
        
       

          {/* Footer Content */}
          <footer className="flex flex-row flex-wrap items-center justify-center w-full
            text-center gap-y-4 gap-x-12  md:justify-evenly pb-12 pt-4 md:pb-20 md:pt-8 lg:pt-20 bg-black opacity-70">

            <Typography color="white" className="font-normal text-sm md:text-xl">
              &copy; 2024 Kiwi Nutz Coffee Company
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors text-sm md:text-xl"
                >
                  About Us
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors text-sm md:text-xl"
                >
                  License
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors text-sm md:text-xl"
                >
                  Contribute
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#contact"
                  color="white"
                  className="font-normal transition-color text-sm md:text-xl"
                >
                  Contact Us
                </Typography>
              </li>
            </ul>
          </footer>
        
      </div>
    </>
  );
}
