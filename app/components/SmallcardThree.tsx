import React from "react";
import "../globals.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  number: number;
}

const SmallcardThree: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  number,
}) => {
  return (
    <div className="">
      <div className=" flex justify-end  ">
        <span className=" absolute border-2 border-gray-500  rounded-full text-gray-500 py-0 px-1.5">
          {number}
        </span>
      </div>
      <div className="card3">
        <img src={imageUrl} className="card-image3" />
        <h4 className="card-title3">{title}</h4>
        <p className="card-description3">{description}</p>
      </div>
    </div>
  );
};

export default SmallcardThree;
