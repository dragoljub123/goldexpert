import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";
import PostComponent from "./components/PostComponent";
import Smalcard from "./components/Smalcard";
import image23 from "@/app/images/image23.png";
import Frame515 from "@/app/images/Frame515.png";
import Stars from "@/app/images/Stars.png";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import BanerabouthRevo from "./components/BanerabouthRevo";
import SmallcardThree from "./components/SmallcardThree";
import BigCard3 from "./components/BigCard3";
import { FooterHome } from "./components/FooterHome";

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
    <div>
      <div className="narandzasta2 ">
        <div className="pozadina  ">
          <Navbar />
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between px-4 lg:px-0 h-full">
              <h1 className="text-5xl text-white font-bold mb-4">
                Trade forex and CFDs <br></br> with the{" "}
                <span className="narandzasta">
                  world's #1 <br></br>broker
                </span>
              </h1>
              <p className="text-white mb-4">
                Trade forex with unbeatable spreads, negative balance<br></br>{" "}
                protection, and award winning 24/7 support
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-3xl hover:bg-green-600 transition-colors duration-300 w-3/12 sm:w-1/3 ">
                Start trading
              </button>
            </div>
            <div className=" hidden md:flex md:w-1/2">
              <Image
                src={image23}
                alt="slika"
                className="max-h-screen object-contain"
              />
            </div>
          </div>
          <div className="flex items-center justify-center   ">
            <p className="text-white">Excellent &nbsp;</p>
            <Image
              src={Stars}
              alt="slika"
              className="max-h-screen object-contain"
            />
            <p className="text-white"> &nbsp; 724 reviews on &nbsp; </p>
            <Image
              src={Frame515}
              alt="slika"
              className="max-h-screen object-contain"
            />
          </div>
        </div>
      </div>
      <div className=" pozadinavektori">
        <div className=" flex flex-col text-center justify-center  py-20 ">
          <h1 className="text-5xl primarna font-bold mb-4">
            Trade
            <span className="narandzasta">
              100+ Instruments <br></br>
            </span>
            with an Award-Winning Broker
          </h1>
          <p className="text-black mb-4">
            Diversify your investment portfolio by trading CFDs <br></br>
            on more than just Forex.
          </p>
        </div>

        <div className="flex justify-center flex-wrap  gap-10 md:gap-4  ">
          <Smalcard
            imageSrc1="/circleoutline.png"
            text="Forex"
            imageSrc2="/plus.png"
          />
          <Smalcard
            imageSrc1="\energy.png"
            imageSrc2="/plus.png"
            text="Energy"
          />
          <Smalcard
            imageSrc1="\finance.png"
            imageSrc2="/plus.png"
            text="Stocks"
          />
          <Smalcard imageSrc1="\gold.png" imageSrc2="/plus.png" text="Metals" />
          <Smalcard
            imageSrc1="\currency-btc.png"
            imageSrc2="/plus.png"
            text="Cryptocurrency CFDs"
          />
        </div>

        <div className="flex  justify-center py-20">
          <button className="bg-green-500 text-white px-6 py-2 rounded-3xl hover:bg-green-600 transition-colors duration-300 w-30">
            Start trading
          </button>
        </div>
        <div className="flex lg:justify-center ">
          <BanerabouthRevo />
        </div>

        <h1 className="text-5xl primarna font-bold text-center py-12 ">
          Start in Less Than 5 Minutes
        </h1>
        <div className=" justify-center py-20 gap-10 flex flex-col sm:flex-row items-center">
          <SmallcardThree
            number={1}
            imageUrl="\join.png"
            title="Register"
            description="Register and and activate
          your account"
          />
          <SmallcardThree
            number={2}
            imageUrl="\deposit.png"
            title="Deposit"
            description="Make a deposit via bank transfer,
          wire or debit card"
          />
          <SmallcardThree
            number={3}
            imageUrl="\trade.png"
            title="Trade"
            description="Get approved and start trading"
          />
        </div>
        <div className="flex  justify-center py-20">
          <button className="bg-green-500 text-white px-6 py-2 rounded-3xl hover:bg-green-600 transition-colors duration-300 w-30">
            Start trading
          </button>
        </div>
        <h1 className="text-5xl primarna font-bold text-center">
          Account For Every Trader
        </h1>
        <p className="text-center py-10">
          We have accounts for both new and more active traders.<br></br>Check
          which fits and you're set to go.
        </p>
        <div className="justify-center flex flex-col sm:flex-row items-center py-20 gap-10">
          <BigCard3
            title="Basic"
            imageSrc="\basic.png"
            description="For beginners who want to trade forex at fixed spreads with guaranteed stop loss"
            listItems={[
              "Leverage up to 1:100",
              "Spread from 3 pips",
              " Free account manager session",
              " Customer support 24/7",
              "Minimum deposit $250",
            ]}
          />
          <div className=" lg:scale-110 flex flex-col items-center">
            <span className="rec flex flex-wrap w-32 justify-center">
              Recommended
            </span>

            <BigCard3
              title="Advanced"
              imageSrc="\standard.png"
              description="For more experienced traders who need a professional advantage"
              listItems={[
                "Leverage up to 1:200",
                "Spread from 2.25 pips",
                "Senior account manager",
                "Quarterly portfolio evaluation",
                "Customer support 24/7",
                "Minimum deposit $10,000",
              ]}
            />
          </div>
          <BigCard3
            title="Diamond"
            imageSrc="\professional.png"
            description="For big players who require a more personalized approach"
            listItems={[
              "Leverage up to 1:500",
              "Spread from 0.9 pips",
              "Senior account manager",
              "Daily portfolio evaluation",
              "Customer support 24/7",
              "Minimum deposit $250,000",
            ]}
          />
        </div>
      </div>
      <div className="flex  justify-center py-10">
        <button className="text-[#343A40] border border-gray-800 font-bold py-2 px-4 rounded-3xl">
          View all accounts
        </button>
      </div>
      <p className="py-10 font-['Manrope'] not-italic font-bold  text-center text-[#343A40]">
        Risk warning: CFDs are complex instruments and come with a high risk of
        losing money rapidly due to leverage. 68% of retail investor accounts
        lose money when trading CFDs with this provider.<br></br>You should
        consider whether you understand how CFDs work and whether you can afford
        to take the high risk of losing your money.
      </p>

      <div className="hidden ">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
