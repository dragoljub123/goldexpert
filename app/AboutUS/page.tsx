import { Navbar } from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import SmallcardThree from "@/app/components/SmallcardThree";
import poslovniljudi from "@/app/images/poslovniljudi.png";
import Suportkartice from "../components/Suportkartice";

export default function AboutUS() {
  return (
    <div>
      <div className="pozadinaboja2  ">
        <Navbar />
        <div className="my-40 ">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full mb-20">
              <h1 className="sm:text-5xl  text-white font-bold mb-4  ">
                About Us
              </h1>
              <p className="text-white mb-4 ">
                Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </div>
        </div>

        <div className="kontejner  flex justify-center items-center ">
          <div className=" text-white">
            <h1 className="">
              We Are <span className=" zlatnozuta">Goldexpert</span> AI
            </h1>
            <p>
              Founded by a team of seasoned traders and tech enthusiasts,
              <br></br>
              Goldexpert was born out of a desire to revolutionize the trading
              <br></br>
              industry.{" "}
            </p>
            <p>
              We recognized the potential of automation in trading and
              <br></br> dedicated ourselves to developing sophisticated robots
              that
              <br></br> leverage the latest technology to provide unparalleled
              trading <br></br>performance. Our journey began with a vision to
              make <br></br>automated trading accessible and effective for
              everyone.
            </p>
          </div>
          <div className="">
            <Image
              src={poslovniljudi}
              alt="slika"
              className="max-h-screen object-contain"
            />
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="  flex flex-col  justify-between items-center  ">
          <div className=" my-10 w-fit border-b border-white flex flex-col  justify-between items-center">
            <h2 className="text-5xl p-2  ">
              Why <span className="zlatnozuta">Choose our AI Robots</span>
            </h2>
            <p className=" ">
              Discover the advantages of our cutting-edge AI trading robots
            </p>
          </div>
        </div>
        <div className=" flex justify-center  mb-20">
          <SmallcardThree
            imageurlnumber="\one.png"
            imageUrl="\Financial Growth.png"
            title="1 Advanced Technology"
            description="Our trading robots are powered by state-of-the-art algorithms and technology, providing you with a   edge in the market."
          />
          <SmallcardThree
            imageurlnumber="\two.png"
            imageUrl="\Safety Box.png"
            title="2 Proven Strategies"
            description="We combine years of trading experience with innovative technology to deliver reliable and profitable trading strategies."
          />
          <SmallcardThree
            imageurlnumber="\three.png"
            imageUrl="\Risk.png"
            title="3 Secure and Reliable"
            description="Your security is our top priority. We adhere to strict regulatory standards and employ robust security measures to protect your investments."
          />
          <SmallcardThree
            imageurlnumber="\three.png"
            imageUrl="\Risk.png"
            title="4 Comprehensive Support"
            description="From setup to troubleshooting, our support team is here to assist you at every step of your trading journey."
          />
        </div>
      </div>
      <div className="pozadinaboja2">
        <div className="  flex flex-col  justify-between items-center  ">
          <div className=" my-10 w-fit  flex flex-col  justify-between items-center">
            <div className="flex">
              <h2 className="text-5xl p-2 text-white ">Our </h2>
              <h2 className="zlatnozuta text-5xl p-2">Team of Experts</h2>
            </div>

            <p className=" text-white my-5">
              Each member of our team brings a wealth of knowledge <br></br> and
              experience to the table, ensuring that our products<br></br> meet
              the highest standards of excellence.
            </p>
          </div>
        </div>
        <div className=" justify-center flex flex-col sm:flex-row  items-center py-20 gap-10  ">
          <Suportkartice
            title2=""
            title=" Trading Experts"
            imageSrc="\CreditCard.png"
            description="Our finance professionals possess deep insights into market dynamics and trading strategies, which form the backbone of our robots' algorithms."
          />
          <div className="  flex flex-col items-center">
            <Suportkartice
              title2=""
              title="Technology Specialists"
              imageSrc="\Profile.png"
              description="Our tech team is at the forefront of innovation, continuously enhancing our robots to ensure they remain cutting-edge and efficient."
            />
          </div>
          <div className="  flex flex-col items-center">
            <Suportkartice
              title2=""
              title="24/5 Customer Support"
              imageSrc="\Chat.png"
              description="Our dedicated support team is always ready to assist you, providing timely and effective solutions to ensure a smooth trading experience."
            />
          </div>
        </div>
      </div>
      <div className="pozadinaboja2 flex  justify-center items-center ">
        <div className=" pozadina2 mb-10 mt-10">
          <div className="ml-16 mt-36">
            <h1 className="sm:text-2xl  text-white font-bold mb-4  ">
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
        </div>
      </div>
    </div>
  );
}
