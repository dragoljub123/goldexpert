import React from "react";
import "../globals.css";

interface Props {
  title: string;
  description: string;
}

const BanerabouthRevo = () => {
  return (
    <div className="  flex justify-center items-center py-10  ">
      <div className="kontbnr  text-white  p-28 ">
        <h1 className="text-5xl flex flex-col  bg-transparent  px-28">
          Why trade with <br></br>Capital Revo
        </h1>
        <p className="flex flex-col  bg-transparent  px-28">
          Capital Revo founded in 2015 is a leading online trading provider,
          <br></br>
          offering trading with Forex, Indices, Precious Metals and Energy.
        </p>

        <div className="little-divs flex flex-row  gap-5 py-1 px-28 ">
          <div className="little-div">Easy withdrawals</div>
          <div className="little-div">Flexible deposit options</div>
        </div>
        <div className="little-divs flex flex-row gap-5 px-28">
          <div className="little-div">24/7 customer support</div>
          <div className="little-div">Account manager</div>
        </div>
      </div>
    </div>
  );
};

export default BanerabouthRevo;
