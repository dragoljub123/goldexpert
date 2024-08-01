"use client";

import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-[#F0F3F8] text-black p-4 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xl font-bold text-yellow-400">★★★★★</span>
        </div>
      </div>
      <p className="mb-2 text-sm">
        Thanks to the Goldexpert AI robot, I&apos;ve earned consistent passive
        income. It&apos;s automated trading at its finest!
      </p>
      <div className="flex items-center">
        <img
          src="/Oval.png"
          alt="Emma Walker1234"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">Emma Walker</p>
          <p className="text-sm">Dubai</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
