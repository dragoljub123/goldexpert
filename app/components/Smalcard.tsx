import React from "react";
import "../globals.css";

interface props {
  imageSrc1: string;
  text: string;
  imageSrc2: string;
}

const Smalcard: React.FC<props> = (props) => {
  return (
    <div className="card1 ">
      <div className="icon1 ">
        <img src={props.imageSrc1} alt="like" />
      </div>
      <div className="text1 text-center ">
        <p>{props.text}</p>
      </div>
      <div className="icon-small1 ">
        <img src={props.imageSrc2} alt="like" />
      </div>
    </div>
  );
};

export default Smalcard;
