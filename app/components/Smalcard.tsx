import React from "react";
import "../globals.css";

interface props {
  imageSrc1: string;
  title: string;
  text: string;
}

const Smalcard: React.FC<props> = (props) => {
  return (
    <div className="card1 ">
      <div className="flex p-2  font-bold">
        <img src={props.imageSrc1} alt="like" />
        <h2>{props.title}</h2>
      </div>

      <div className=" text-center ">
        <p className="p-2">{props.text}</p>
      </div>
    </div>
  );
};

export default Smalcard;
