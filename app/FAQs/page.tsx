import { Navbar } from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import FaqComponent from "@/app/components/FaqComponent";
import moneyrise2 from "@/public/moneyrise2.png";

export default function FAQs() {
  return (
    <div>
      <div className="pozadinaboja2  ">
        <Navbar />
        <div className="py-20">
          <div className="mx-auto flex items-center justify-center">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center px-4 lg:px-0 h-full mb-20">
              <h1 className="text-2xl text-white font-bold mb-6 mt-6 text-center lg:text-4xl">
                FAQ’s
              </h1>
              <p className="text-white mb-4">
                Find answers to the most common questions about our trading
                robots
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pozadinaboja2 flex-col  justify-center items-center ">
        <h1 className="font-bold text-white text-2xl lg:px-52 lg:py-10 ">
          Frequently Asked Questions
        </h1>
        <div className="">
          <FaqComponent
            question="Q:  What is an AI trading robot and how does it work?"
            answer="An AI trading robot is an automated system that uses artificial intelligence to analyze market data and execute trades automatically. This advanced technology helps in identifying trading opportunities and making informed decisions without human intervention."
          />

          <FaqComponent
            question="Q:  How do I start using the trading robot?"
            answer="To start using the trading robot, simply fill in the contact form  on our website, and we will get in touch with you to guide you through the setup process."
          />
          <FaqComponent
            question="Q:  Are the trading robots compatible with all trading platforms?"
            answer="An automated trading robot is software that uses algorithms to analyze market data and execute trades automatically."
          />
          <FaqComponent
            question="Q:  What types of assets can I trade with the robot?"
            answer="You can trade a variety of assets with our trading robot, including forex and gold, which are our primary focuses. Additionally, the robot also supports trading in bitcoin and Nasdaq stocks."
          />
          <FaqComponent
            question="Q:  How secure are my funds when using the trading robot?"
            answer="Your funds are highly secure when using our trading robot. We maintain 80% collateral in real estate, and our company is regulated and adheres to strict security protocols to protect your investments."
          />

          <FaqComponent
            question="Q:  What kind of returns can I expect from using the trading robot?"
            answer="An automated trading robot is software that uses algorithms to analyze market data and execute trades automatically."
          />
          <FaqComponent
            question="Q: Are there any fees associated with using the trading robot?"
            answer="There are no fees associated with using our trading robot. You can enjoy the benefits of automated trading without any additional costs, except for the small commission on profits."
          />
          <FaqComponent
            question="Q:  Can I customize the trading strategies used by the robot?"
            answer="No, the trading strategies used by the robot cannot be customized. Our robot uses a proprietary AI algorithm that is designed to deliver optimal trading results based on comprehensive market analysis."
          />
          <FaqComponent
            question="Q:  What level of customer support is available for trading robot users?"
            answer="We offer 24/5 customer support to assist our trading robot users. Our dedicated support team is available to help you with any questions or issues you may encounter."
          />
        </div>
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
