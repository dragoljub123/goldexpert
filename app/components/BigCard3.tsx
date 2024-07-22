import React from "react";

interface CardProps {
  title: string;
  title2: string;
  imageSrc: string;
  description: string;
}

const BigCard3: React.FC<CardProps> = ({
  title,
  title2,
  imageSrc,
  description,
}) => {
  return (
    <div className="cardb3">
      <div className="flex flex-col  justify-between items-center my-20">
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex mt-8">
          <h2 className="text-4xl px-2 zlatntext">{title2}</h2>
          <h2 className="text-4xl px-2">{title}</h2>
        </div>
      </div>
      <div className="card-bodyb3  ">
        <p className=" text-center">{description}</p>
      </div>
      <div className="card-footerb3 ">
        <button className="bg-customBlue text-white px-12 py-1 rounded-3xl hover:bg-zlatna transition-colors duration-300 w-25">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BigCard3;
