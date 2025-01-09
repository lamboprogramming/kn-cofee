'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import BlogNav from '@/app/components/BlogNav';
import Footer from '@/app/components/Footer';
import { MdDateRange } from "react-icons/md";





// Array of blog posts
const blogPosts = [
  {
    id: 1,
    title: "Fueling Success: The Benefits of Quality Coffee in the Office",
    slug: "fueling-success-benefits-of-quality-coffee-in-office",
    image: '/blog/img1.jpg',
    date: "December 16 2024",
    content: (
      <>
  <div className="text-gray-600 text-base md:text-lg lg:text-xl leading-loose lg:leading-relaxed">
    {/* Intro */}
    <p>
      Coffee has long been hailed as the elixir of productivity, serving as a beloved companion for workers in offices
      around the world. Beyond its ability to kickstart the morning and provide a much-needed midday pick-me-up, quality
      coffee in the workplace offers a myriad of benefits that extend far beyond the simple enjoyment of a caffeinated beverage.
    </p>
    <p className="indent-0 mt-4 mb-4">
      In this article, we&apos;ll explore the many advantages of providing quality coffee in the office and how it can contribute to
      a more productive, engaged, and satisfied workforce.
    </p>

    {/* Paragraphs */}
    {/* 1 */}
    <p className="text-sm sm:text-base lg:text-lg leading-loose sm:leading-10 md:leading-8">
      <span className="font-semibold">Boosts Morale and Motivation:</span> It&apos;s no secret that a fresh cup of coffee has the power to uplift
      spirits and put a spring in one&apos;s step. By offering quality coffee in the office, employers can boost morale and
      motivation among their employees. The simple act of providing access to freshly brewed coffee communicates care and
      appreciation for employees&apos; well-being, fostering a positive and supportive work environment. Additionally, the caffeine
      content in coffee can enhance alertness and focus, helping employees stay energized and motivated throughout the
      workday.
    </p>

    {/* 2 */}
    <p className="text-sm sm:text-base lg:text-lg leading-loose sm:leading-10 md:leading-8 pt-6">
      <span className="font-semibold">Promotes Collaboration and Creativity:</span> Coffee breaks have long been recognized as a catalyst
      for spontaneous conversations, brainstorming sessions, and idea exchanges in the workplace. By creating designated coffee
      areas or installing quality coffee machines, employers can encourage informal interactions and collaboration among
      employees. These impromptu gatherings around the coffee pot provide valuable opportunities for team bonding, knowledge
      sharing, and creative problem-solving, ultimately leading to greater innovation and productivity in the workplace.
    </p>

    {/* 3 */}
    <p className="text-sm sm:text-base lg:text-lg leading-loose sm:leading-10 md:leading-8 pt-6">
      <span className="font-semibold">Enhances Employee Well-Being:</span> Quality coffee not only satisfies the taste buds but also offers
      potential health benefits when consumed in moderation. Studies have shown that coffee contains antioxidants and bioactive
      compounds that may help reduce the risk of certain diseases, including cardiovascular disease and type 2 diabetes.
      Additionally, the ritual of enjoying a cup of coffee can provide a moment of relaxation and stress relief amidst the
      demands of the workday, contributing to overall employee well-being and job satisfaction.
    </p>

    {/* 4 */}
    <p className="text-sm sm:text-base lg:text-lg leading-loose sm:leading-10 md:leading-8 pt-6">
      <span className="font-semibold">Improves Employee Retention:</span> In today&apos;s competitive job market, employers are constantly
      seeking ways to attract and retain top talent. Offering quality coffee in the office can serve as a unique and attractive perk
      that sets companies apart from their competitors. Employees are more likely to feel valued and appreciated when their
      workplace provides amenities that enhance their daily experience, such as freshly brewed coffee. By investing in quality
      coffee provisions, employers can improve employee retention rates and create a positive reputation as an employer of choice.
    </p>

    {/* 5 */}
    <p className="text-sm sm:text-base lg:text-lg leading-loose sm:leading-10 md:leading-8 pt-6">
      <span className="font-semibold">Cultivates Company Culture:</span> Coffee has a remarkable ability to bring people together and foster
      a sense of community in the workplace. Whether it&apos;s gathering around the coffee machine for a morning chat or sharing a
      coffee-fueled brainstorming session, coffee breaks provide valuable opportunities for employees to connect and bond with
      their colleagues. By incorporating quality coffee into the fabric of company culture, employers can strengthen team
      cohesion, promote inclusivity, and create a more enjoyable and fulfilling work environment for everyone.
    </p>
  </div>
</>

    ),
    
  },

  // Blog 2
  {
    id: 2,
    title: "Coffee Breaks: The Secret Ingredient to Productivity",
    slug: "coffee-breaks-secret-ingredient-to-productivity",
    image: '/blog/img2.jpg',
    date: "December 9 2024",
    content: (
      <>
        <div className="space-y-4 font-sans p-2">
            <h2 className="lg:text-xl font-semibold text-gray-700 mb-2">1. Recharge and Refocus</h2>
            <p className="text-gray-700 mb-4 md:mb-6 lg:mb-8 text-base">
              Taking a break, especially with a cup of coffee, can be the perfect way to recharge your mental energy. Studies show that brief breaks improve focus and prevent decision fatigue, leading to better productivity.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
              <li>
                <strong>The Science Behind Breaks:</strong> Our brains function in cycles, alternating between high focus and natural dips in attention. A coffee break during these dips can help reset mental clarity.
              </li>
              <li>
                <strong>Caffeine with Benefits:</strong> Moderate caffeine intake is known to improve alertness, memory, and reaction times. Pairing coffee with a short pause gives your mind a chance to relax while reaping these benefits.
              </li>
              <li>
                <strong>Preventing Burnout:</strong> Regular coffee breaks throughout the day can help combat the physical and mental exhaustion that leads to burnout.
              </li>
            </ul>
         
            <h2 className="lg:text-xl font-semibold text-gray-700 mb-2 ">2. Encouraging Social Interaction</h2>
            <p className="text-gray-700 mb-4 md:mb-6 lg:mb-8 text-base">
              Coffee breaks aren&apos;t just about the coffee—they&apos;re about the people you share it with. These informal moments are a key ingredient in building strong workplace relationships.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
              <li>
                <strong>Spontaneous Connections:</strong> Coffee areas often serve as informal meeting spaces where employees from different teams can connect and share ideas.
              </li>
              <li>
                <strong>Team Bonding:</strong> Group coffee breaks foster camaraderie, strengthen relationships, and create opportunities for collaboration.
              </li>
              <li>
                <strong>Cross-Department Networking:</strong> Larger companies can use coffee stations to break down silos, encouraging casual conversations between teams that wouldn&apos;t otherwise interact.
              </li>
            </ul>
       
            <h2 className="lg:text-xl font-semibold text-gray-700 mb-2">3. Boosting Creativity and Problem-Solving</h2>
            <p className="text-gray-700 mb-4 md:mb-6 lg:mb-8 text-base">
              Some of the best ideas are born over a cup of coffee. A brief change in scenery and pace during a coffee break can spark creativity and help employees approach challenges with fresh perspectives.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
              <li>
                <strong>Relaxation Breeds Creativity:</strong> A coffee break allows employees to step back from intense tasks, creating mental space for new ideas to emerge.
              </li>
              <li>
                <strong>Collaborative Thinking:</strong> Casual coffee chats often lead to brainstorming and the exchange of innovative ideas.
              </li>
              <li>
                <strong>Solving Stuck Problems:</strong> When employees feel stuck on a task, stepping away for a coffee break can help them return with a clearer mind.
              </li>
            </ul>
         
            <h2 className="lg:text-xl font-semibold text-gray-700 mb-2">4. The Power of Rituals</h2>
            <p className="text-gray-700 mb-4 md:mb-6 lg:mb-8 text-base">
              Regular coffee breaks can become a valued ritual that creates structure in the workday and enhances the workplace experience.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
              <li>
                <strong>Morning Coffee Meetups:</strong> Starting the day with a shared coffee ritual helps set a positive tone and ensures employees feel connected right from the start.
              </li>
              <li>
                <strong>Scheduled Breaks:</strong> Instituting regular coffee break times encourages employees to step away from their work without guilt.
              </li>
              <li>
                <strong>Cultural Significance:</strong> Coffee breaks can be tied to workplace culture, fostering a sense of belonging and unity.
              </li>
            </ul>
        
            <h2 className="lg:text-xl font-semibold text-gray-700 mb-2">5. A Space for Wellness</h2>
            <p className="text-gray-700 mb-4 md:mb-6 lg:mb-8 text-base">
              Coffee breaks can double as moments to focus on wellness, helping employees recharge both mentally and physically.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base">
              <li>
                <strong>Mindful Coffee Moments:</strong> Encourage employees to savor their coffee slowly, taking a mindful approach to the experience.
              </li>
              <li>
                <strong>Movement and Hydration:</strong> Use coffee breaks as a reminder for employees to stretch, hydrate, or take a quick walk.
              </li>
              <li>
                <strong>Mental Reset:</strong> Pair coffee breaks with a moment of gratitude, journaling, or breathing exercises for a holistic recharge.
              </li>
            </ul>

            <p className="text-gray-600 text-sm leading-loose md:text-lg mt-6">
              Coffee breaks are far more than a quick pit stop during the workday—they&apos;re a strategic tool for boosting productivity, fostering social connections, and nurturing creativity. By encouraging employees to take intentional breaks, workplaces can create a culture that values well-being and collaboration, resulting in happier and more productive teams.
            </p>
            <p className="text-gray-600 text-sm md:text-lg leading-loose">
              So, take a moment, pour yourself a cup, and start thinking about how your workplace can make the most of this secret ingredient to success!
            </p>
         
        </div>
      </>
    ),
    
  },
  
  // Blog 3
  {
    id: 3,
    title: "5 Ways to Improve Your Office Coffee Experience",
    slug: "5-ways-to-improve-your-office-coffee-experience",
    image: '/blog/img3.jpg',
    date: "December 2 2024",
    content: (
      <div>
        <h1 className="font-bold text-lg ">Introduction</h1>
        <p className="mb-8 leading-loose md:leading-relaxed">
          For many employees, coffee is more than just a drink—it&apos;s a daily ritual that fuels focus, creativity, and social
          connection. While office coffee setups can range from a basic pot to high-tech machines, improving the coffee experience
          doesn&apos;t have to be complicated or costly. Here are five actionable ways to elevate the coffee game in your workplace
          and keep your team energized and satisfied.
        </p>
           {/* par 1 */}
          <h2 className="lg:text-xl font-semibold text-gray-700 mb-2 underline-offset-8 underline decoration-yellow-400">1. Upgrade the Machine</h2>
          <p className="text-gray-800 mb-4 md:mb-6 sm:text-lg font-thin mt-2 text-base ">
            Investing in the right coffee machine can make a world of difference. The perfect machine depends on your team&apos;s size
            and preferences.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base mt-2">
            <li>
              <strong>Single-Serve Machines:</strong> Ideal for smaller offices or employees with varying tastes. Machines like Keurig
              or Nespresso allow for personalized drinks without waste.
            </li>
            <li>
              <strong>Bean-to-cup Systems:</strong> Great for larger teams who appreciate fresh coffee made from whole beans.
            </li>
            <li>
              <strong>Espresso Machines:</strong> A high-end option for teams that love specialty drinks like lattes or cappuccinos.
            </li>
            <li>
              <strong>Cold Brew Machines:</strong> A trendy addition for teams that enjoy cold coffee year-round.
            </li>
          </ul>
        <p className="text-sm sm:text-base font-thin  mt-6 text-gray-700 md:mb-12 mb-10  ">
          <span className="font-semibold">Pro Tip:</span> Kiwi Nutz Coffee provides free-of-charge high-end coffee machines and
          maintenance packages to ensure they stay in top condition.
        </p>

           {/* par 2 */}
          <h2 className="lg:text-xl font-semibold text-gray-700 mb-2 mt-4 underline-offset-8 underline decoration-yellow-400">2. Curate the Beans</h2>
          <p className="text-gray-800 mb-4 md:mb-6 sm:text-lg font-thin mt-2 text-base ">
          The quality of your coffee starts with the beans. Offering a variety of beans or blends can cater to diverse tastes and make employees feel valued.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base mt-2">
            <li>
              <strong>Source Locally:</strong> Partner with local roasters to support small businesses and provide fresh, high-quality beans.
            </li>
            <li>
              <strong>Offer Options:</strong> Stock light, medium, and dark roasts to suit different preferences.
            </li>
            <li>
              <strong>Specialty Blends:</strong> Include decaf, organic, or Fair Trade-certified options for inclusivity.
            </li>
          </ul>
        <p className=" text-sm sm:text-base font-thin  mt-6 text-gray-700 md:mb-12 mb-10  ">
          <span className="font-semibold">Pro Tip:</span> Kiwi Nutz Coffee sources Fair Trade coffee beans globally and roasts locally to ensure quality and freshness – it&apos;s a small detail that can enhance the coffee experience.
        </p>
           {/* par 3 */}
          <h2 className="lg:text-xl font-semibold text-gray-700 mb-2 mt-4 underline-offset-8 underline decoration-yellow-400">3. Stock the Essentials</h2>
          <p className="text-gray-800 mb-4 md:mb-6 sm:text-lg font-thin mt-2 text-base ">
          Your coffee setup isn&apos;t complete without the extras that make coffee personal. Stocking a range of options shows you care about everyone&apos;s preferences.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base mt-2">
            <li>
              <strong>Milk and Milk Alternatives:</strong> Include whole milk, skim milk, almond milk, oat milk, and soy milk.
            </li>
            <li>
              <strong>Offer Options:</strong> Offer sugar, honey, stevia, and artificial sweeteners.
            </li>
            <li>
              <strong>Flavor Boosters:</strong> Add syrups like vanilla, hazelnut, or caramel for custom drinks.
            </li>
            <li>
              <strong>Extras:</strong>  Provide cinnamon, cocoa powder, and whipped cream for a touch of indulgence.
            </li>
          </ul>
        <p className="text-sm sm:text-base font-thin  mt-6 text-gray-700 md:mb-12 mb-10 ">
          <span className="font-semibold">Pro Tip:</span> Use stylish dispensers or containers to keep your coffee station neat and visually appealing.
        </p>
           {/* par 4 */}
          <h2 className="lg:text-xl font-semibold text-gray-700 mb-2 mt-4 underline-offset-8 underline decoration-yellow-400">4. Create a Coffee Corner</h2>
          <p className="text-gray-800 mb-4 md:mb-6 sm:text-lg font-thin mt-2 text-base ">
          The ambiance of your coffee space can influence how employees feel about their breaks. A well-designed coffee corner invites relaxation and social interaction.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base mt-2">
            <li>
              <strong>Comfortable Seating:</strong>  Add a few chairs and small tables to encourage informal conversations.
            </li>
            <li>
              <strong>Decor and Lighting:</strong> Use warm lighting, artwork, or plants to make the space welcoming.
            </li>
            <li>
              <strong>Practical Layout:</strong> Ensure the coffee station is easy to access, with a logical flow for grabbing cups, supplies, and cleaning up.
            </li>
            <li>
              <strong>Snack Pairings:</strong>  Include snacks like biscuits, pastries, or fruits to complement the coffee.
            </li>
          </ul>
        <p className="text-sm sm:text-base  font-thin  mt-6 text-gray-700 md:mb-12 mb-10 ">
          <span className="font-semibold">Pro Tip:</span> Rotate decor or add seasonal elements (e.g., pumpkins in fall or festive lights in December) to keep the space fresh and engaging.
        </p>
           {/* par 5 */}
          <h2 className="lg:text-xl font-semibold text-gray-700 mb-2 mt-4 underline-offset-8 underline decoration-yellow-400">5. Ask for Feedback</h2>
          <p className="text-gray-800 mb-4 md:mb-6 sm:text-lg font-thin mt-2 text-base ">
          The easiest way to improve your office coffee experience is by asking employees what they want. Create an open feedback loop to ensure everyone feels included.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-sm md:text-base mt-2">
            <li>
              <strong>Surveys:</strong>  Add a few chairs and small tables to encourage informal conversations.
            </li>
            <li>
              <strong>Suggestion Box:</strong> Use warm lighting, artwork, or plants to make the space welcoming.
            </li>
            <li>
              <strong>Test and Rotate:</strong> Ensure the coffee station is easy to access, with a logical flow for grabbing cups, supplies, and cleaning up.
            </li>
          </ul>
        <p className="text-sm sm:text-base  font-thin  mt-6 text-gray-700 md:mb-12 mb-10 ">
          <span className="font-semibold">Pro Tip:</span> Consider forming a &quot;coffee committee&quot; of interested employees to manage choices and ensure everyone’s needs are met.
        </p>
      </div>
    ),
    
  },
];


const PostPage = ({ params }) => {
  const { posts: slug } = params; // Get the slug from URL
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    
    <>
    <BlogNav />
    <div className=" mx-auto py-10 md:container p-4 ">
      <div className='flex justify-center'>
      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={400}
        priority={true}
        style={{ objectFit: 'cover' }}
        className="rounded-lg mb-6 justify-center"
      />
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{post.date}</div>
      <div className="text-lg">{post.content}</div>
    </div>
    <Footer />
    </>
  );
};

export default PostPage;
