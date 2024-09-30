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
      <div className='flex flex-wrap items-center p-4 bg-brown-600 justify-evenly '>
        
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
                Our system monitors your coffee count around the clock, and as soon as you’re running low, we ship fresh beans straight to you—freshness is just a delivery away.
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
                alt="coffee in glass"
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
                Our team regularly cleans and maintains each machine, ensuring it brews to perfection every time. With Kiwi Nutz, you can rely on consistent quality in every sip.
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
                alt="office"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
              Service When You Need It, Anytime
              </Typography>
              <Typography>
              Kiwi Nutz provides round-the-clock service for your coffee machines.
              </Typography>
              {openIndex === 2 && (
                <Typography className='pt-2'>
                We act as your dedicated service techs, available 24/7, to ensure your machines are always running smoothly—100% free of charge. Anytime you need us, we’re just a call away.
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
