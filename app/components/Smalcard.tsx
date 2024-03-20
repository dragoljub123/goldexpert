import React from "react";
import "../globals.css";

interface SmallCardProps {
  imageSrc1: string;
  imageSrc2: string;
  text: string;
}

const Smalcard: React.FC<SmallCardProps> = ({ imageSrc1, imageSrc2, text }) => {
  return (
    <div className="card1">
      <div className="">
        <img src={imageSrc1} alt="" />
      </div>
      <div className="text1 text-center ">
        <p>{text}</p>
      </div>
      <div className="">
        <img src={imageSrc2} alt="" />
      </div>
    </div>
  );
};

export default Smalcard;
