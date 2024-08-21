import React from "react";

interface CardProps {
  title: string;
  title2: string;
  imageSrc: string;
  description: string;
}

const Suportkartice: React.FC<CardProps> = ({
  title,
  title2,
  imageSrc,
  description,
}) => {
  return (
    <div className=" rounded-2xl bojakarticeUS w-[360px]  sm:h-[294px] ">
      <div className="flex flex-col  justify-evenly items-center mt-5 ">
        <img
          src={imageSrc}
          alt="Card1235678"
          style={{ width: "61px", height: "58px" }}
        />
        <div className="flex text-white">
          <h2 className="text-4xl px-2 zlatntext">{title2}</h2>
          <h5 className="text-2xl px-3 font-bold">{title}</h5>
        </div>
      </div>
      <div className="mt-5  ">
        <p className=" text-center text-gray-400 p-4 ">{description}</p>
      </div>
    </div>
  );
};

export default Suportkartice;
