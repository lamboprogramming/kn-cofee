'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import a1 from '../../../public/about1.jpeg'
import a2 from '../../../public/about2.jpeg'
import a3 from '../../../public/about3.jpeg'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=''>

    {/* Cards Start */}
      <div className='flex flex-wrap items-center p-4 bg-brown-800 justify-evenly '>
        
        {/* Card 1 */}
        <div className='m-4'>
          <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
          <Image
            src={a1}
            alt="a bunch of coffee beans with a white cup with more beans in it"
            className="object-cover w-full h-full"
          />
        </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Always Fresh, Always Ready
              </Typography>
              <Typography>
                We understand that coffee is more than just another beverage — it&apos;s an essential part of the office. 
              </Typography>
              {openIndex === 0 && (
                <Typography className='mt-2'>
                We monitor your coffee volume constantly. When your beans are running low we will have fresh beans shipped to your office.
                </Typography>
              )}
              <Button onClick={() => toggleContent(0)} color="white"className="mt-2 text-orange-800 duration-200 border hover:bg-brown-50 hover:border-orange-800">
                {openIndex === 0 ? 'Read Less' : 'Read More'}
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Card 2 */}
        <div className='m-4'>
          <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
          <Image
            src={a2}
            alt="a bunch of coffee beans with a white cup with more beans in it"
            className="object-cover w-full h-full"
          />
        </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Precision in Every Brew
              </Typography>
              <Typography>
              We take care of your coffee machines so every cup is as rich and flavorful as the first and the last.
              </Typography>
              {openIndex === 1 && (
                <Typography className='pt-2'>
                Our team regularly cleans and maintains each machine (completely free of charge!) which includes the refrigerator and the water system.
                </Typography>
              )}
              <Button onClick={() => toggleContent(1)} color="white" className="mt-2 text-orange-800 duration-200 border hover:border-orange-800 hover:bg-brown-50 ">
                {openIndex === 1 ? 'Read Less' : 'Read More'}
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Card 3 */}
        <div className='m-4'>
          <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
          <Image
            src={a3}
            alt="a bunch of coffee beans with a white cup with more beans in it"
            className="object-cover w-full h-full"
          />
        </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Innovative Pricing Models
              </Typography>
              <Typography>
              Kiwi Nutz provides exceptional quality, service and value to corporate offices.
              </Typography>
              {openIndex === 2 && (
                <Typography className='pt-2'>
                We will tailor a pricing plan to suit your company&apos;s needs. Our prices on a per cup basis are comparable to pod based coffee minus without the hassle, landfill, and ordinary quality.
                </Typography>
              )}
              <Button onClick={() => toggleContent(2)} color="white" className="mt-2 text-orange-800 duration-200 border hover:bg-brown-50 hover:border-orange-800">
                {openIndex === 2 ? 'Read Less' : 'Read More'}
              </Button>
            </CardBody>
          </Card>
        </div>

      </div>
  
    </div>
  );
}
