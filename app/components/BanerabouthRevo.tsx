import React from "react";
import "../globals.css";

const BanerabouthRevo = () => {
  return (
    <div className="">
      <div className="kontbnr  text-white   lg:p-32 ">
        <h1 className="text-5xl  bg-transparent md: ">
          Why trade with <br></br>Capital Revo
        </h1>
        <p className=" bg-transparent  lg:px-26 lg:py-8  ">
          Capital Revo founded in 2015 is a leading online trading provider,
          <br></br>
          offering trading with Forex, Indices, Precious Metals and Energy.
        </p>

        <div className=" w-1/2 lg:py-6">
          <div className=" mx-auto ">
            <div className=" grid md:grid-cols-2 gap-4  ">
              <div className="little-div">Easy withdrawals</div>
              <div className="little-div">Flexible deposit options</div>
              <div className="little-div">24/7 customer support</div>
              <div className="little-div">Account manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanerabouthRevo;
