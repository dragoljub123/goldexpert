import React from "react";
import "../globals.css";

interface props {
  imageSrc1: string;
  title: string;
  text: string;
}

const Smalcard: React.FC<props> = (props) => {
  return (
    <div className="w-[360px] h-[129px] xl:w-[530px] rounded-xl bg-gray-100 ">
      <div className="flex p-2  font-bold">
        <img src={props.imageSrc1} alt="slika12345" className="pr-2" />
        <h2 className="lg:text-2xl">{props.title}</h2>
      </div>

      <div className="  ">
        <p className="text-gray-700 px-4 text-sm   lg:text-sm">{props.text}</p>
      </div>
    </div>
  );
};

export default Smalcard;
