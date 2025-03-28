'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuCircleArrowRight } from 'react-icons/lu';
import BlogNav from '../components/BlogNav';
import Footer from '../components/Footer';

// Blog posts array
const blogPosts = [
  // {
  //   id: 15,
  //   title: "What Is Office Coffee and How Does It Work?",
  //   slug: "what-is-office-coffee-and-how-does-it-work?",
  //   image: '/blog/img15.jpg', 
  //   date: "February 14 2025",
  //   description:
  //     "Office coffee is more than just brewing a pot of coffee in the break room. It encompasses a range of services, equipment, and supplies designed to create a convenient, high-quality coffee experience atwork.",
  // },
  {
    id: 14,
    title: "Guaranteed No Stress Office Coffee: Kiwi Nutz to the Rescue!",
    slug: "guaranteed-no-stress-office-coffee-kiwi-nutz-to-the-rescue",
    image: '/blog/img14.jpg', 
    date: "February 10 2025",
    description:
      "Let's face it, the office coffee situation can make or break your workday. We've all been there—those dreadful mornings when you sip a stale, bitter cup of coffee that barely qualifies as drinkable.",
  },
  {
    id: 13,
    title: "Top Ten Reasons Why You Deserve a Coffee Break (with Kiwi Nutz Coffee)",
    slug: "top-ten-reasons-why-you-deserve-a-coffee-break",
    image: '/blog/img13.jpg', 
    date: "February 5 2025",
    description:
      "Work is hard, but coffee breaks make it bearable. Add Kiwi Nutz Coffee to the mix, and suddenly life's not so bad. Here's why you should be sneaking in more coffee breaks—guilt-free.",
  },
  {
    id: 12,
    title: "The High Cost of Coffee and How Kiwi Nutz Coffee Offers a Cost-Effective Solution",
    slug: "the-high-cost-of-coffee-and-how-kiwi-nutz-coffee-offers-a-cost-effective-solution",
    image: '/blog/img12.jpg', 
    date: "February 3 2025",
    description:
      "Coffee lovers worldwide are feeling the pinch as the cost of their beloved brew continues to rise. From your local café to the office break room, the impact of soaring coffee prices is evident.",
  },
  {
    id: 11,
    title: "Top Ten Reasons to Upgrade Your Office Coffee Service with Kiwi Nutz Coffee",
    slug: "top-ten-reasons-to-upgrade-your-office-coffee-service-with-kiwi-nutz-coffee",
    image: '/blog/img11.jpg', 
    date: "January 27 2025",
    description:
      "If you're still relying on outdated coffee machines or subpar coffee blends, it's time for a change. Kiwi Nutz Coffee is here to revolutionize your workplace caffeine experience.",
  },
  {
    id: 10,
    title: "The Benefits of Taking a Coffee Break at Work with Kiwi Nutz Coffee",
    slug: "the-benefits-of-taking-a-Coffee-break-at-work-with-kiwi-nutz-coffee",
    image: '/blog/img10.jpg', 
    date: "January 20 2025",
    description:
      "In the hustle and bustle of the modern workplace, it's easy to feel overwhelmed by deadlines and to-do lists. However, taking regular coffee breaks can be a simple yet effective way to recharge and refocus.",
  },
  {
    id: 9, 
    title: "The Death of Office Coffee and How to Avoid It",
    slug: "the-death-of-office-coffee-and-how-to-avoid-it",
    image: '/blog/img9a.jpg', 
    date: "January 15 2025",
    description:
      "With changing work environments, rising expectations for quality, and an increasing number of employees working remotely, the traditional office coffee setup is losing its charm. But all is not lost.",
  },
  {
    id: 8,
    title: "Corporate Coffee Solutions in the Tri-State Area: Discover Kiwi Nutz Coffee",
    slug: "corporate-coffee-solutions-in-the-tri-state-area-discover-kiwi-nutz-coffee",
    image: '/blog/img8c.jpg',
    date: "January 8 2025",
    description:
      "In the fast-paced world of business, great coffee isn't just a perk—it's a necessity. Enter Kiwi Nutz Coffee, the Tri-State area's go-to provider of corporate coffee solutions.",
  },
  {
    id: 7,
    title: "New Jersey's Office Coffee Game Changer: Why Kiwi Nutz Coffee Rules the Garden State",
    slug: "new-jerseys-office-coffee-game-changer-why-kiwi-nutz-coffee-rules-the-garden-state",
    image: '/blog/img7a.jpg',
    date: "January 1 2025",
    description:
      "From the early-morning commuters pounding Route 1 to the boardwalk dreamers plotting their next big idea, caffeine is the lifeblood of the Garden State.",
  },
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
  {
    id: 5,
    title: "Sustainability in Office Coffee: How to Brew Greener",
    slug: "sustainability-in-office-coffee-how-to-brew-greener",
    image: '/blog/img5.jpg',
    date: "November 18 2024",
    description:
      "By rethinking how coffee is brewed, sourced, and disposed of in the workplace, companies can take meaningful steps toward a greener future.",
  },
  {
    id: 6,
    title: "The Best Office Coffee in NJ, NY, and CT: Why Kiwi Nutz Coffee Stands Out",
    slug: "the-best-office-coffee-in-new-jersey-new-york-and-connecticut",
    image: '/blog/img6.jpg',
    date: "November 15 2024",
    description:
      "In the bustling tri-state area of New Jersey, New York, and Connecticut, coffee is more than just a drink—it's the fuel that powers workplaces big and small.",
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
                      href={`/blog/${post.slug}`}
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
