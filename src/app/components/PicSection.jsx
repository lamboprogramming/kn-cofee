import React from 'react';

export default function PicSection() {
  return (
    <>
    <div className='mt-8 mb-4' id='contact'>
      <div className="">
        <img
          className="object-cover w-full h-56 sm:h-96"
          src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="max-w-screen-sm p-4 mt-6 sm:text-center sm:mx-auto ">
  
      <p className="text-lg text-gray-700 md:text-xl sm:px-4">
      Take your workplace to the next level with café-quality coffee at no risk, with a <span className='text-orange-800'>free</span> two-week trial.
      </p>
      <hr className="w-full my-8 border-gray-300" />
    </div>
 
    </div>
    </>
  );
}
