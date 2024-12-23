'use client'
import React from "react";
import { RxTextAlignTop } from "react-icons/rx";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={scrollToTop}
        className="px-6 py-3 text-black   "
      >
        <div className="flex text-2xl ">
        <RxTextAlignTop />
      
        </div>
      
        
      </button>
    </div>
  );
};

export default BackToTop;
