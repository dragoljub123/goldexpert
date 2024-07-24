import { Navbar } from "../components/Navbar";
import PaketCard from "../components/PaketCard";
import "../globals.css";
import Image from "next/image";
import tabela1 from "@/app/images/tabela1.png";
import tabela2 from "@/app/images/tabela2.png";
import Smalcard from "../components/Smalcard";
import moneyrise2 from "@/public/moneyrise2.png";

export default function Tradingrobots() {
  return (
    <div>
      <div className="pozadinaboja2  ">
        <Navbar />
        <div className="my-20 ">
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
      <div className="lg:flex justify-center items-center">
        <Image
          src={tabela1}
          alt="slika"
          className="max-h-screen object-contain"
        />
        <Image
          src={tabela2}
          alt="slika"
          className="max-h-screen object-contain"
        />
      </div>
      <div>
        <div className="mx-auto lg:flex items-center  justify-center gap-7 sm:flex-row ">
          <Smalcard
            imageSrc1="/TimeIcon.png"
            title="Function "
            text="Automated trading software designed to analyze currency markets (forex) and execute trades based on pre-programmed algorithms."
          />
          <Smalcard
            imageSrc1="\TimeIcon.png"
            title="Strategy "
            text="Robot can employ various strategies, including technical analysis (using price charts and indicators) or news-based trading (reacting to economic events)."
          />
          <Smalcard
            imageSrc1="\TimeIcon.png"
            title="Benefits "
            text="24/7 market monitoring, automation of repetitive tasks, and potentially faster execution than manual trading."
          />
        </div>
      </div>
      <div className=" text-center mt-5 mb-20">
        <button className="bg-customBlue text-white px-12 py-1 rounded-3xl hover:bg-zlatna transition-colors duration-300 w-52 h-11  ">
          Get started
        </button>
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
            <button className="bg-customBlue text-white px-12 py-1 rounded-3xl hover:bg-zlatna transition-colors duration-300 w-25 ">
              Get started
            </button>
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
