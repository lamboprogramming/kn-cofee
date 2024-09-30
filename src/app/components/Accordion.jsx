import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import Image from 'next/image';
import Logo from '../../../public/knvector.svg';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      heading: "Where are your beans sourced from?",
      content: "Our blends are sourced from Columbia, Ethiopia, and Brazil."
    },
    {
      heading: "What does the free trial include?",
      content: "Our trial includes a free two-week delivery and installation of our machines. We prefer to prove our value before you decide whether to continue."
    },
    {
      heading: "How often do you service the machine?",
      content: "Depending on usage, we’ll visit your location either weekly or biweekly. We’ve got you covered so you can enjoy your coffee without the hassle."
    },
    {
      heading: "What if my machine breaks?",
      content: "We offer 24/7 (and fast) troubleshooting if something goes wrong with the machine. If it can’t be fixed, we’ll replace it free of charge!"
    },
    {
      heading: "What are your operating hours?",
      content: "We operate Monday through Friday from 8 AM to 6 PM. For special events or weekend services, please contact us to make arrangements."
    }
  ];

  return (
    <>
      <div className='pt-5 mb-4 ' id='accordion'>
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
            <div className="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[40px] rounded-e-lg"></div>
            <div className="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -end-[16px] top-[88px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
              <Image src={Logo} alt="logo img" />
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="flex flex-col justify-center p-4 mx-auto md:w-2/3">
          {accordionItems.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg">
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full gap-3 p-5 font-extrabold bg-white hover:bg-brown-100`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl">{item.heading}</span>
                  {activeIndex === index ? (
                    <TiMinus className="w-5 h-5 text-orange-800" />
                  ) : (
                    <FaPlus className="w-5 h-5 text-brown-400" />
                  )}
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96 bg-white' : 'max-h-0'
                }`}
                aria-labelledby={`accordion-collapse-heading-${index}`}
              >
                <div className="p-5 bg-white">
                  <p className="mb-2 text-base text-gray-900 sm:text-base md:text-lg lg:text-xl">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
