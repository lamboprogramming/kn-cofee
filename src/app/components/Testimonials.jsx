import React from 'react';
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Office Manager",
      company: "MBLM",
      testimonial: "It is such a pleasure to have you come by and the dedication you take to cleaning and wiping down every part of the machine, it's unmatched.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Office Coordinator",
      company: "MackCut",
      testimonial: "To maintain productivity here we need our coffee so we appreciate you for being so flexible and coming to fix our machine so quickly. We know technology isn't perfect. ",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      name: "Employee",
      company: "Peak6",
      testimonial: "I think at this point I just enjoy the taste of the coffee because I really don't need anymore caffeine today, but I'm ready for another cup. ",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Facilities",
      company: "Peak6",
      testimonial: "This machine is great and I like the taste of the coffee. As someone who does enjoy going to starbucks, I'm saving a lot more time and money.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Receptionist",
      company: "HSG",
      testimonial: "I didn't even know a machine could come with this many options of coffee, that is really amazing.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Office Manager",
      company: "Sullivan & Worcester",
      testimonial: "I love how I get to adjust the milk and strength of the coffee every time I make a cup and how many options are available.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },

  ];

  return (
    <>
    <div className="max-w-screen-xl px-4 py-4 mx-auto text-center ">
      <Typography variant="h2" color="blue-gray" className="mb-4">
        Hear what our <span className='text-orange-800'>clients</span> have to say
      </Typography>
      <Typography className="mb-8 text-gray-600 sm:mb-12">
        Discover why our clients love <span className='text-orange-800'>Kiwi Nutz</span>. From exceptional coffee to outstanding service, hear all about our commitment to quality.
      </Typography>

      <div className="flex flex-wrap justify-center gap-8 p-4 bg-brown-100">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-full mb-4 sm:w-80 ">
         
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {testimonial.name} - {testimonial.company}
              </Typography>
              <Typography className="text-gray-900">
                "{testimonial.testimonial}"
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
}
