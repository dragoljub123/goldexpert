import { Navbar } from "../components/Navbar";
import "../globals.css";
import Image from "next/image";
import tabela1 from "@/app/images/tabela1.png";
import tabela2 from "@/app/images/tabela2.png";
import Smalcard from "../components/RobotsSmallcard";
import moneyrise2 from "@/public/moneyrise2.png";
import PopupButton from "@/app/components/PopupButton";
import RobotsSmallcard from "../components/RobotsSmallcard";

export default function Tradingrobots() {
  return (
    <div className="mx-auto">
      <div className="pozadinaboja2  ">
        <Navbar />
        <div className="mt-20 ">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full mb-40 slideUpAnimacija">
              <h1 className=" text-2xl  text-white font-bold mb-6 mt-6 text-center lg:text-4xl ">
                <span className="zlatnozuta  ">AI</span>&nbsp; Trading Robots
              </h1>
              <p className="text-white text-center mb-4 ">
                Experience the power of AI with our cutting-edge trading robots,
                maximize your investment returns effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#F6F9FC] flex  flex-col justify-center items-center ">
        <div className="max-w-screen-1440p ">
          <div className="md:flex ">
            <Image src={tabela1} alt="slika" className=" " />
            <Image src={tabela2} alt="slika" className=" " />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-[#F6F9FC] flex flex-col justify-center items-center gap-5 md:flex md:flex-row   ">
          <RobotsSmallcard
            imageSrc1="/TimeIcon.png"
            title="Function "
            text="Automated trading software designed to analyze currency markets (forex) and execute trades based on pre-programmed algorithms."
          />
          <RobotsSmallcard
            imageSrc1="\TimeIcon.png"
            title="Strategy "
            text="Robot can employ various strategies, including technical analysis (using price charts and indicators) or news-based trading (reacting to economic events)."
          />
          <RobotsSmallcard
            imageSrc1="\TimeIcon.png"
            title="Benefits "
            text="24/7 market monitoring, automation of repetitive tasks, and potentially faster execution than manual trading."
          />
        </div>
      </div>
      <div className=" bg-[#F6F9FC] text-center pt-5 pb-20 md:pt-20">
        <span className="neondugmence">
          <PopupButton />
        </span>
      </div>
      <div className="pozadinaboja2 flex  justify-center items-center">
        <div className=" pozadina2 mb-10 mt-10">
          <div className="text-center lg:text-left lg:ml-16 lg:mt-36">
            <h1 className="text-2xl  text-white font-bold mb-6 mt-6  lg:text-4xl  ">
              Start Earning
              <span className="zlatnozuta  ">
                Passive <br></br>Income
              </span>
              <span>Today</span>
            </h1>
            <p className="text-white mb-4 ">
              Empower your financial future with our AI trading<br></br> robots
              and start earning passive income today.
            </p>
            <span className="neondugmence">
              <PopupButton />
            </span>
          </div>
          <div className="">
            <Image
              src={moneyrise2}
              alt="slika"
              className="lg:hidden md:hidden xl:hidden mt-4 mb-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
