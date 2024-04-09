import React from "react";
import "../globals.css";

const PaketCard = () => {
  return (
    <div className="paket-card ">
      <div className="left ">
        <p>Account type</p>
        <p className="mininaslov">Basic</p>
        <p>
          Start your trading journey with our Basic Account. Access essential
          trading tools and market research to make informed decisions.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-3xl hover:bg-green-600 transition-colors duration-300 w-3/12 sm:w-1/3 ">
          Open account
        </button>
      </div>
      <div className="right py-24 ">
        <div className=" flex justify-evenly">
          <ul>
            <li>Minimum deposit</li>
            <li>Spread</li>
            <li>Leverage</li>
            <li>Account manager</li>
            <li>Customer support</li>
            <li>Technical analysis, market news</li>
          </ul>

          <div>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
              <li>Item 6</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketCard;
