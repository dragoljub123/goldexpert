import React from "react";

interface CardProps {
  title: string;
  title2: string;
  imageSrc: string;
  description: string;
}

const Suportkartica2: React.FC<CardProps> = ({
  title,
  title2,
  imageSrc,
  description,
}) => {
  return (
    <div
      className="cardb3  bojakarticeUS"
      style={{ width: "327px", height: "231px" }}
    >
      <div className="flex flex-col  justify-between items-center ">
        <img
          src={imageSrc}
          alt="slika1567"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex text-white ">
          <h2 className="text-4xl px-2 zlatntext">{title2}</h2>
          <h5 className="text-2xl px-3 font-bold">{title}</h5>
        </div>
      </div>
      <div className="card-bodyb3 text-white  ">
        <p className=" text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Suportkartica2;
