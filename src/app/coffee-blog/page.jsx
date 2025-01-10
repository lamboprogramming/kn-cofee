'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuCircleArrowRight } from 'react-icons/lu';
import BlogNav from '../components/BlogNav';
import Footer from '../components/Footer';

// Blog posts array
const blogPosts = [
  {
    id: 1,
    title: "Fueling Success: The Benefits of Quality Coffee in the Office",
    slug: "fueling-success-benefits-of-quality-coffee-in-office",
    image: '/blog/img1.jpg',
    date: "December 16 2024",
    description:
      "Explore the many advantages of providing quality coffee in the office and how it can contribute to a more productive, engaged, and satisfied workforce.",
  },
  {
    id: 2,
    title: "Coffee Breaks: The Secret Ingredient to Productivity",
    slug: "coffee-breaks-secret-ingredient-to-productivity",
    image: '/blog/img2.jpg',
    date: "December 9 2024",
    description:
      "Some of the best ideas are born over a cup of coffee. A coffee break can help employees approach challenges with fresh perspectives.",
  },
  {
    id: 3,
    title: "5 Ways to Improve Your Office Coffee Experience",
    slug: "5-ways-to-improve-your-office-coffee-experience",
    image: '/blog/img3.jpg',
    date: "December 2 2024",
    description:
      "While office coffee setups can range from a basic pot to high-tech machines, improving the coffee experience doesn't have to be complicated or costly.",
  },
  {
    id: 4,
    title: "Tracing the Roots: The Origins of New Zealand's Coffee Culture",
    slug: "the-origins-of-new-zealands-coffee-culture",
    image: '/blog/img4.jpg',
    date: "November 25 2024",
    description:
      "In this article, we'll delve into the fascinating origins of New Zealand's coffee culture, tracing its evolution from humble beginnings to its current status as a global coffee destination.",
  },
];

const Page = () => {
  return (
    <>
      <BlogNav />
      <div className="pb-4 md:pt-2 pt-4 md:pb-6 bg-slate-50">
        <section className="container mx-auto p-4 sm:p-2">
          <div className="sm:mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
              >
                {/* Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  width={500}
                  height={500}
                  priority={true}
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="p-6 relative flex flex-col justify-end">
                  <h4 className="block antialiased tracking-tight text-xs font-semibold leading-snug text-blue-300 mb-4">
                    {post.date}
                  </h4>
                  <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    {post.title}
                  </h4>
                  <p className="block antialiased font-sans text-xs leading-relaxed text-white my-2 font-normal">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center text-white mt-2">
                    <Link
                      href={`/coffee-blog/${post.slug}`}
                      className="inline-flex items-center font-medium text-blue-300 hover:underline hover:underline-offset-8"
                    >
                      Read more
                      <LuCircleArrowRight className="ml-2 transition-transform duration-300 hover:-rotate-90" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
