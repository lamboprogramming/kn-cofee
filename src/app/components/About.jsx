"use client";
import React, { useState } from 'react';

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
              <img
                src="https://images.unsplash.com/photo-1671225146283-c6aae20a9d07?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="coffee beans"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Always Fresh, Always Ready
              </Typography>
              <Typography>
                We understand that coffee is more than just a beverage — it's an essential part of your workplace culture. 
              </Typography>
              {openIndex === 0 && (
                <Typography className='mt-2'>
                We monitor your coffee volume constantly, and as soon as you’re running low, we ship fresh beans straight to you.
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
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="flavored brown coffee in a tall glass"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Precision in Every Brew
              </Typography>
              <Typography>
              We take care of your coffee machines so every cup is as rich and flavorful as the first.
              </Typography>
              {openIndex === 1 && (
                <Typography className='pt-2'>
                Our team regularly cleans and maintains each machine (completely free of charge!) ensuring it brews to perfection every time.
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
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="four people in office working with computers"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Innovative Pricing Models
              </Typography>
              <Typography>
              Kiwi Nutz provides exceptional quality, service and value.
              </Typography>
              {openIndex === 2 && (
                <Typography className='pt-2'>
                We will tailor a pricing plan to suit your company’s needs. Our prices on a per cup basis are comparable to pod based coffee – just without the hassle, landfill, and ordinary quality.
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
