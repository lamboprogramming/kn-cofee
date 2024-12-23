import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blog1 from '../../../public/blog/blog1.jpg'
import blog2 from '../../../public/blog/blog2.jpg'
import blog3 from '../../../public/blog/blog3.jpg'
import { HiNewspaper } from "react-icons/hi2";
import { LuCircleArrowRight } from "react-icons/lu";

const page = () => {
  return (
    <div>

          <section className="container mx-auto px-8 py-10 lg:py-28">

{/* Intro */}
    <div className='flex text-3xl ml-2'> <HiNewspaper />
      <h2 className="block antialiased tracking-normal font-sans font-semibold text-orange-800 !text-2xl !leading-snug lg:!text-3xl ml-2"
      >&quot; Tell Em He&apos;s Dreaming &quot;
      </h2>
    </div>

      <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mt-4 max-w-lg !font-normal !text-gray-900">
        That moment you&apos;re so tired you drink a cup of coffee to wake up, but you&apos;re still tired—so you drink another cup, only to realize you&apos;re just a highly caffeinated zombie running on vibes...
      </p>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Blog 1 */}
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
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
        >
          Tracing the Roots: The Origins of New Zealand&apos;s Coffee Culture
        </h4>
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
          New Zealand, renowned for its breathtaking landscapes and vibrant culture, may not be the first place that comes to mind when 
          thinking about coffee.
        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog1" className="inline-flex items-center font-medium text-white  hover:underline">
                     Read more
                     <LuCircleArrowRight className='ml-2'/>
                 </Link>
             </div>
      </div>
          </div>

          {/* Blog 2 */}
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
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
        >
          5 Ways to Improve Your Office Coffee Experience
        </h4>
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
          While office coffee setups can range from a basic pot to high-tech machines, improving the coffee experience doesn&apos;t have to be complicated or costly.
        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog2" className="inline-flex items-center font-medium text-white  hover:underline">
                     Read more
                     <LuCircleArrowRight className='ml-2'/>
                 </Link>
             </div>
      </div>
          </div>

          {/* Blog 3 */}
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
          className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"
        >
          Coffee Breaks: The Secret Ingredient to Productivity
        </h4>
        <p
          className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal"
        >
          Some of the best ideas are born over a cup of coffee. A coffee break can spark creativity and help employees approach challenges with fresh perspectives.

        </p>
        <div className="flex justify-between items-center text-white mt-2">
                 
                 <Link href="/blog/blog3" className="inline-flex items-center font-medium text-white  hover:underline">
                     Read more
                     <LuCircleArrowRight className='ml-2'/>
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