import React from "react";
import Image from "next/image";
import baner from "../images/baner.png";

export const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image src={baner} alt="slika" className="max-h-screen object-contain" />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[150px] font-bold">Dragoljub</h2>
        <p className="text-xl md:text-1xl lg:text-5xl font-semibold ">
          Traveler, Photographer
        </p>
      </div>
    </div>
  );
};
