'use client'
import React from 'react'
import Article from '../components/Article'
import BlogNav from '../components/BlogNav'

import Logo from '../../../public/knvector.svg';
import { Typography } from "@material-tailwind/react";
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <BlogNav />
    <div className='bg-blue-900/90 '>
    <Article />
    </div>
    <Footer />
    </>
  )
}

export default page