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
    <div className=" bojakarticeUS rounded-lg lg:w-[227px] lg:h-[181px]">
      <div className="flex flex-col  justify-between items-start ">
        <img
          src={imageSrc}
          alt="slika1567"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex text-white ">
          <h2 className="text-3xl  zlatntext">{title2}</h2>
          <h5 className="text-[19px] px-2 font-bold">{title}</h5>
        </div>
      </div>
      <div className="card-bodyb3 text-gray-400  ">
        <p className=" text-left text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Suportkartica2;
