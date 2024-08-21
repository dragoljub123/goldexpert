import { Navbar } from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import SmallcardThree from "@/app/components/SmallcardThree";
import poslovniljudi from "@/app/images/poslovniljudi.png";
import Suportkartice from "../components/Suportkartice";
import moneyrise2 from "@/public/moneyrise2.png";
import PopupButton from "@/app/components/PopupButton";

export default function AboutUS() {
  return (
    <div className=" mx-auto">
      <div className="pozadinaFQ  ">
        <Navbar />
        <div className="my-20 ">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full mb-5 slideUpAnimacija">
              <h1 className="text-2xl  text-white font-bold mb-6 mt-6 text-center lg:text-4xl ">
                About Us
              </h1>
              <p className="text-white mb-4 ">
                Excepteur sint occaecat cupidatat non proident
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="kontejner  mb-10 rounded-2xl w-[390px] lg:w-[980px] xl:w-[1280px] lg:flex lg:justify-between lg:items-center ">
            <div className=" text-white rounded-md">
              <h1 className="text-xl font-bold p-4  mb-6 mt-6 text-left lg:text-3xl  ">
                We Are <span className=" zlatnozuta">Goldex</span>expert AI
              </h1>
              <p className="text-sm p-4 ">
                Founded by a team of seasoned traders and tech enthusiasts,
                <br></br>
                Goldexpert was born out of a desire to revolutionize the trading
                <br></br>
                industry.{" "}
              </p>
              <p className="text-sm p-4">
                We recognized the potential of automation in trading and
                <br></br> dedicated ourselves to developing sophisticated robots
                that
                <br></br> leverage the latest technology to provide unparalleled
                trading <br></br>performance. Our journey began with a vision to
                make <br></br>automated trading accessible and effective for
                everyone.
              </p>
            </div>
            <div className="-mb-10 md:mb-0">
              <Image
                src={poslovniljudi}
                alt="slika"
                className="rounded-lg p-2 md:p-0 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" max-w-screen-1440p">
          <div className="  flex flex-col  justify-between items-center  ">
            <div className=" my-10 w-fit border-b border-white flex flex-col  justify-between items-center">
              <h2 className="text-2xl  font-bold mb-6 mt-6  lg:text-4xl ">
                Why <span className="zlatnozuta">Choose our AI Robots</span>
              </h2>
              <p className=" ">
                Discover the advantages of our cutting-edge AI trading robots
              </p>
            </div>
          </div>
          <div className=" lg:flex justify-center  mb-20">
            <div className="p-4 border-[1px] h-[275px] lg:w-[260px] xl:w-auto  ">
              <SmallcardThree
                imageurlnumber="\one.png"
                imageUrl="\Financial Growth(5).png"
                title=" Advanced Technology"
                description="Our trading robots are powered by state-of-the-art algorithms and technology, providing you with a   edge in the market."
                number="1"
              />
            </div>
            <div className=" p-4 border-[1px] h-[275px] lg:w-[260px] xl:w-auto ">
              <SmallcardThree
                imageurlnumber="\two.png"
                imageUrl="\Financial Growth(6).png"
                title=" Proven Strategies"
                description="We combine years of trading experience with innovative technology to deliver reliable and profitable trading strategies."
                number="2"
              />
            </div>
            <div className=" p-4 border-[1px] h-[275px] lg:w-[260px] xl:w-auto ">
              <SmallcardThree
                imageurlnumber="\two.png"
                imageUrl="\Financial Growth(7).png"
                title=" Secure and Reliable"
                description="Your security is our top priority. We adhere to strict regulatory standards and employ robust security measures to protect your investments."
                number="3"
              />
            </div>
            <div className=" p-4 border-[1px] h-[275px] lg:w-[260px] xl:w-auto ">
              <SmallcardThree
                imageurlnumber="\two.png"
                imageUrl="\Financial Growth(8).png"
                title=" Comprehensive Support"
                description="From setup to troubleshooting, our support team is here to assist you at every step of your trading journey."
                number="4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pozadinaboja2">
        <div className="  flex flex-col  justify-between items-center  ">
          <div className=" my-10 w-fit  flex flex-col  justify-between items-center">
            <div className="flex">
              <h2 className="text-3xl p-2 text-white ">Our </h2>
              <h2 className="zlatnozuta text-3xl p-2">Team of Experts</h2>
            </div>

            <p className=" text-white my-5 text-sm lg:text-lg">
              Each member of our team brings a wealth of knowledge <br></br> and
              experience to the table, ensuring that our products<br></br> meet
              the highest standards of excellence.
            </p>
          </div>
        </div>
        <div className=" flex flex-col  justify-center lg:flex-row  items-center py-20 gap-10  ">
          <Suportkartice
            title2=""
            title=" Trading Experts"
            imageSrc="\CreditCard.png"
            description="Our finance professionals possess deep insights into market dynamics and trading strategies, which form the backbone of our robot's algorithms."
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
      <div className="pozadinaboja2 flex  justify-center items-center">
        <div className=" pozadina2 mb-10 mt-10">
          <div className="md:ml-16 md:mt-36 lg:text-left lg:ml-16 lg:mt-36">
            <h1 className="text-2xl text-center text-white font-bold mb-6 mt-6 md:text-left lg:text-4xl  ">
              Start Earning
              <span className="zlatnozuta">
                Passive <br></br>Income
              </span>
              <span>Today</span>
            </h1>
            <p className="text-white mb-4 text-center md:text-left ">
              Empower your financial future with our AI trading<br></br> robots
              and start earning passive income today.
            </p>
            <span className=" flex justify-center md:justify-normal">
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
