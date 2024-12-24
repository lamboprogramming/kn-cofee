import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blog1 from '../../../public/blog/blog1.jpg'
import blog2 from '../../../public/blog/blog2.jpg'
import blog3 from '../../../public/blog/coff4.jpg'
import blog4 from '../../../public/blog/coff5.jpg'
import blog5 from '../../../public/blog/coff2.jpg'
import blog6 from '../../../public/blog/coff3.jpg'
import { HiNewspaper } from "react-icons/hi2";
import { LuCircleArrowRight } from "react-icons/lu";

const page = () => {
  return (
    <div className='pb-4 md:pt-2 pt-4 md:pb-6 bg-slate-50'>

        <section className="container mx-auto p-4 sm:p-2  ">

         <div className="sm:mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Blog 1 12-16-24 */}
          <div
            className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
          >
            
            <Image
             src={blog4}
              alt="new zealand landscape with the ocean in the back"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            
            
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
      <h4
          className="block antialiased tracking-widest  text-xs  font-semibold leading-snug text-white mb-4"
        >
          December 16 2024
        </h4>
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-200"
        >
          Fueling Success: The Benefits of Quality Coffee in the Office
        </h4>
        
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
         Explore the many advantages of providing quality coffee in the office and how it can contribute to a more productive, engaged, and
         satisfied workforce.
        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog4" className="inline-flex items-center font-medium text-blue-200  hover:underline hover:underline-offset-8">
                     Read more
                     <LuCircleArrowRight className='ml-2 transition-transform duration-300 hover:-rotate-90'/>
                 </Link>
             </div>
      </div>
          </div>

          {/* Blog 2 12-9-24 */}
          <div
            className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
          >
            <Image
             src={blog3}
              alt="new zealand landscape with the ocean in the back"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
      <h4
          className="block antialiased tracking-widest  text-xs font-semibold leading-snug text-white mb-4"
        >
          December 9 2024
        </h4>
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-200"
        >
          Coffee Breaks: The Secret Ingredient to Productivity
        </h4>
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
          Some of the best ideas are born over a cup of coffee. A coffee break can help employees approach challenges with fresh perspectives.

        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog3" className="inline-flex items-center font-medium text-blue-200  hover:underline hover:underline-offset-8">
                     Read more
                     <LuCircleArrowRight className='ml-2 transition-transform duration-300 hover:-rotate-90'/>
                 </Link>
             </div>
      </div>
          </div>

          {/* Blog 3 12-2-24 */}
           <div
            className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
          >
            <Image
             src={blog2}
              alt="new zealand landscape with the ocean in the back"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
      <h4
          className="block antialiased tracking-widest  text-xs font-semibold leading-snug text-white mb-4"
        >
          December 2 2024
        </h4>
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-200"
        >
          5 Ways to Improve Your Office Coffee Experience
        </h4>
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
          While office coffee setups can range from a basic pot to high-tech machines, improving the coffee experience doesn&apos;t have to be complicated or costly.
        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog2" className="inline-flex items-center font-medium text-blue-200  hover:underline hover:underline-offset-8">
                     Read more
                     <LuCircleArrowRight className='ml-2 transition-transform duration-300 hover:-rotate-90'/>
                 </Link>
             </div>
      </div>
           </div>

          {/* Blog 4 11-25-24 */}
          <div
            className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
          >
            <Image
             src={blog1}
              alt="new zealand landscape with the ocean in the back"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="p-6 relative flex flex-col justify-end">
      <h4
          className="block antialiased tracking-widest  text-xs font-semibold leading-snug text-white mb-4"
        >
          November 25 2024
        </h4>
        <h4
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-orange-200"
        >
          The Origins of New Zealand Coffee
        </h4>
        
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
          New Zealand, renowned for its breathtaking landscapes and vibrant culture, may not be the first place that comes to mind when 
          thinking about coffee.
        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog1" className="inline-flex items-center font-medium text-orange-200  hover:underline hover:underline-offset-8">
                     Read more
                     <LuCircleArrowRight className='ml-2 transition-transform duration-300 hover:-rotate-90'/>
                 </Link>
             </div>
      </div>
          </div>

         
     

         

     


         </div>

        </section>

    </div>
  )
}

export default page