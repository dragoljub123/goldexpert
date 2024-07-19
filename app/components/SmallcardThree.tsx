import React from "react";
import "../globals.css";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  imageurlnumber: string;
}

const SmallcardThree: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  imageurlnumber,
}) => {
  return (
    <div className="flex">
      <div className="card3">
        <img src={imageUrl} className="card-image3" />
        <h4 className="card-title3">{title}</h4>
        <p className="card-description3">{description}</p>
      </div>
      <div className=" flex justify-end  ">
        <img src={imageurlnumber} className="w-8 h-12" />
      </div>
    </div>
  );
};

export default SmallcardThree;
