import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import PostComponent from "./components/PostComponent";
import Smalcard from "./components/Smalcard";
import OneGreenStar from "@/app/images/onegreenstar.png";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import SmallcardThree from "./components/SmallcardThree";
import BigCard3 from "./components/BigCard3";
import moneyrise2 from "@/public/moneyrise2.png";
import PopupButton from "./components/PopupButton";
import Testimonial from "./components/Testimonial";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;
export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div className=" mx-auto">
      <div className="pozadina  ">
        <Navbar />
        <div className="my-40 slideUpAnimacija items-center justify-center text-center">
          <div className="inline-flex   p-1 rounded-full shadow-neon bg-transparent">
            <Image
              src={OneGreenStar}
              alt="OneGreenStar"
              className="max-h-screen object-contain"
            />
            <p className="text-white text-xs tracking-widest">
              {" "}
              &nbsp; RATED 4.8/5 on TRUSTPILOT&nbsp;{" "}
            </p>
          </div>
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
              <h1 className="text-3xl  text-white font-bold mb-6 mt-6 text-center lg:text-4xl leading-relaxed">
                Earn Passive Income with
                <br></br>
                <span className="zlatnozuta flex items-center justify-center leading-relaxed ">
                  AI Trading Robots
                </span>
              </h1>
              <p className="text-white mb-4 text-center tracking-wide">
                Automated Trading Solutions for Gold, NASDAQ, Bitcoin, and Forex
                Markets
              </p>
              <span className="neondugmence">
                <PopupButton />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F6F9FC] justify-center flex flex-col sm:flex-row  items-center py-20 gap-28 ">
        <div className=" max-w-screen-1440p  flex flex-col items-center z-30">
          <BigCard3
            title2=" Gold"
            title=" AI Robot"
            imageSrc="\Group 125.png"
            description="Prioritizes gold trading, leveraging market downturns to 
             capitalize on opportunities.Utilizes advanced technical
              analysis to identify potential buying or selling moments."
          />
        </div>
        <div className=" max-w-screen-1440p  flex flex-col items-center z-40">
          <BigCard3
            title2=" Forex "
            title="AI Robot"
            imageSrc="\Currency Exchange.png"
            description="Analyzes currency markets and executes trades with precision (including NASDAQ and Bitcoin trading). Employs various strategies such as technical analysis and news-based trading to maximize profits."
          />
        </div>
      </div>
      <div className=" pozadinaboja bg-gradijent-pozadina">
        <div className="  flex flex-col  justify-between items-center  ">
          <div className=" my-10 w-fit border-b border-white flex flex-col  justify-between items-center">
            <h2 className=" text-4xl p-2  text-white font-bold">
              How it Works
            </h2>
            <p className="text-white text-sm m-4">
              Discover how our trading robots use AI algorithms to <br></br>{" "}
              analyze market trends and execute trades automatically
            </p>
          </div>
        </div>
        <div className=" belitekst  justify-center gap-10 flex flex-col sm:flex-row items-center">
          <SmallcardThree
            imageurlnumber="\one.png"
            imageUrl="\Financial Growth.png"
            title=" Market Analysis"
            description="Our robots continuously monitor the markets 24/7, using advanced algorithms to analyze data and identify trading opportunities."
            number="1"
          />
          <SmallcardThree
            imageurlnumber="\two.png"
            imageUrl="\Safety Box.png"
            title=" Automated Execution"
            description="Once a favorable condition is detected, the robot executes trades automatically, ensuring swift and accurate order placement."
            number="2"
          />
          <SmallcardThree
            imageurlnumber="\three.png"
            imageUrl="\Risk.png"
            title=" Risk Management"
            description="The robots are designed to maximize your returns by implementing proven trading strategies and minimizing risks through precise execution."
            number="3"
          />
        </div>
      </div>

      <div className=" bg-[#F6F9FC] mx-auto flex items-center justify-center ">
        <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full">
          <h1 className="text-2xl py-4 text-black font-bold mb-6 mt-6 text-center lg:text-4xl ">
            Your Funds are
            <span className="zlatnozuta  "> Insured & Secure</span>
          </h1>
          <p className=" mb-4 text-center text-sm ">
            Trade with confidence knowing your funds are protected by real
            estate
          </p>
        </div>
      </div>
      <div className="bg-[#F6F9FC] flex  justify-evenly items-center  ">
        <div className="max-w-screen-1440p ">
          <div className="flex flex-col  gap-10 justify-center items-center md:flex md:flex-row md:justify-center md:items-center">
            <Smalcard
              imageSrc1="/Money Bag.png"
              title="Insured Funds "
              text="Your funds are secured by 80% real estate collateral, ensuring both insurance and security on our trading robot platform."
            />
            <Smalcard
              imageSrc1="\Secure.png"
              title="Regulated and Secure "
              text="We adhere to strict regulatory standards and employ robust security measures to safeguard your assets."
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-evenly items-center bg-[#F6F9FC] nevidljivo-mob ">
        <div className="max-w-screen-1440p">
          <div className="  flex-col justify-center pb-20 ">
            <h1 className="text-2xl font-bold pt-20  lg:text-4xl text-center">
              Happy Customers
            </h1>
            <p className="text-gray-700 text-center mb-4 text-sm p-10 ">
              Read the testimonials from our happy clients
            </p>
            <div className="flex gap-5 justify-evenly items-center">
              <Testimonial
                name="Emma Walker"
                location="Dubai"
                imageSrc="/Oval.png"
                testimonial="Thanks to the Goldexpert AI robot, I've earned consistent passive income. It's automated trading at its finest!"
              />
              <Testimonial
                name="Maximilian Kowalski"
                location="Germany"
                imageSrc="/Oval(1).png"
                testimonial="The gold AI trading robot exceeded my expectations. It's reliable and has brought me significant profits effortlessly."
              />
              <Testimonial
                name="Sophia Chang"
                location="Singapore"
                imageSrc="/Oval(2).png"
                testimonial="Impressed by how the Forex AI robot has simplified trading for me. It's reliable and profitable!"
              />
            </div>
            <div className="flex gap-5 justify-evenly items-center pt-5">
              <Testimonial
                name="Liam Patel"
                location="Thailand"
                imageSrc="/Oval(3).png"
                testimonial="The gold trading AI robot is a game-changer! It's helped me grow my investments with minimal effort."
              />
              <Testimonial
                name="Elena Rossi "
                location="Hong Kong"
                imageSrc="/Oval(4).png"
                testimonial="The Forex robot has been a lifesaver. It's user-friendly and has allowed me to earn extra income consistently!"
              />
              <Testimonial
                name="Jacob Nguyen"
                location="China"
                imageSrc="/Oval(5).png"
                testimonial="Using the AI trading robot has been a great decision. It's efficient and has helped me diversify my portfolio effectively."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 flex flex-col justify-center items-center lg:hidden md:hidden xl:hidden">
        <h1 className="text-2xl font-bold mb-6 mt-6 lg:text-4xl text-center">
          Happy Customers
        </h1>
        <p className="text-center mb-4 text-sm">
          Read the testimonials from our happy clients
        </p>
        <Testimonial
          name="Emma Walker"
          location="Dubai"
          imageSrc="/Oval.png"
          testimonial="Thanks to the Goldexpert AI robot, I've earned consistent passive income. It's automated trading at its finest!"
        />
      </div>

      <div className="pozadinaboja2 flex  justify-center items-center">
        <div className=" pozadina2 mb-10 mt-10">
          <div className="text-center lg:text-left lg:ml-16 lg:mt-36">
            <h1 className="text-2xl  text-white font-bold mb-6 mt-6  lg:text-4xl  ">
              Start Earning
              <span className="zlatnozuta">
                Passive <br></br>Income
              </span>
              <span>Today</span>
            </h1>
            <p className="text-white mb-4 ">
              Empower your financial future with our AI trading<br></br> robots
              and start earning passive income today.
            </p>
            <PopupButton />
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

      <div className=" hidden ">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
