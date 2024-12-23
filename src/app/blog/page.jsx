'use client'
import React from 'react'
import Article from '../components/Article'
import BlogNav from '../components/BlogNav'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

const page = () => {
  return (
    <div>
    <BlogNav />
    <Article />
    <BackToTop/>
    <Footer />
    </div>
  )
}

export default page