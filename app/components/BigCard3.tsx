import React from "react";
import PopupButton from "@/app/components/PopupButton";

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
    <div className="cardb3 w-[360px]  lg:w-[400px] xl:w-[568px] xl:h-[542px] ">
      <div className="flex flex-col my-5 justify-between items-center lg:mt-20">
        <img
          src={imageSrc}
          alt="slika1234"
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex mt-8 font-bold ">
          <h2 className="text-2xl lg:text-4xl px-2 zlatntext">{title2}</h2>
          <h2 className="text-2xl lg:text-4xl px-2">{title}</h2>
        </div>
      </div>
      <div className="p-4 md:py-4 md:px-12 text-gray-700 ">
        <p className=" text-center  text-[16px]">{description}</p>
      </div>
      <div className="flex justify-center py-10 lg:pb-3   ">
        <PopupButton />
      </div>
    </div>
  );
};

export default BigCard3;
