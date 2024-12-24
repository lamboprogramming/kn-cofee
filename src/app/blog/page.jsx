'use client'
import React from 'react'
import Article from '../components/Article'
import BlogNav from '../components/BlogNav'
import BackToTop from '../components/BackToTop'
import Logo from '../../../public/knvector.svg';
import { Typography } from "@material-tailwind/react";

const page = () => {
  return (
    <div>
    <BlogNav />
    <Article />
    <BackToTop/>

    <div>
      {/* Start */}
      <div 
      className="relative "
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        
      }}
    >
      <div className='min-w-[250px] bg-opacity-60 bg-black '>
        <footer className="flex flex-row flex-wrap items-center justify-center w-full
          text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-evenly pt-20 pb-20">
          <Typography color="white" className="font-normal text-sm md:text-xl">
            &copy; 2024 Kiwi Nutz Coffee Supply
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 justify-center ">
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
                className="font-normal transition-colors text-sm md:text-xl "
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
    </div>
    </div>
    
    
    </div>
  )
}

export default page