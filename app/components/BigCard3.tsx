import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  listItems: string[];
}

const BigCard3: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  listItems,
}) => {
  return (
    <div className="cardb3" style={{ width: "382px", height: "auto" }}>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl">{title}</h2>
        <img
          src={imageSrc}
          alt="Card"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="card-bodyb3 ">
        <p>{description}</p>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card-footerb3">
        <button className="bg-green-500 text-white px-6 py-2 rounded-2xl hover:bg-green-600 transition-colors duration-300 w-30">
          Start trading
        </button>
      </div>
    </div>
  );
};

export default BigCard3;
