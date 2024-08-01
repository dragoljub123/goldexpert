"use client";

import React from "react";

interface TestimonialProps {
  name: string;
  location: string;
  imageSrc: string;
  testimonial: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  location,
  imageSrc,
  testimonial,
}) => {
  return (
    <div className="bg-[#F0F3F8] text-black p-4 rounded-xl w-[414px]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xl font-bold text-yellow-400">★★★★★</span>
        </div>
      </div>
      <p className="mb-2 text-sm">{testimonial}</p>
      <div className="flex items-center p-2">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
