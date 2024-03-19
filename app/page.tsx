import { client } from "@/sanity/lib/client";
import { Hero } from "./components/Hero";
import { Post } from "@/app/utils/interface";
import PostComponent from "./components/PostComponent";
import Smalcard from "./components/Smalcard";
import image23 from "@/app/images/image23.png";
import Frame515 from "@/app/images/Frame515.png";
import plus from "@/app/images/plus.png";
import Stars from "@/app/images/Stars.png";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { stringify } from "querystring";

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
      <div className="">
        <Navbar />
        <div className="flex items-center justify-center h-screen pozadina">
          <div className="flex flex-col w-full md:w-1/2 bg-transparent rounded-lg p-20 ">
            <h1 className="text-3xl text-white font-bold mb-4">
              Trade forex and CFDs <br></br> with the world's #1 broker
            </h1>
            <p className="text-white mb-4">
              Trade forex with unbeatable spreads, negative balance protection,
              and award winning 24/7 support
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-2xl hover:bg-green-600 transition-colors duration-300 w-3/12">
              Start trading
            </button>
          </div>
          <div className="hidden md:flex md:w-1/2">
            <Image
              src={image23}
              alt="slika"
              className="max-h-screen object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-center  pozadina  ">
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

      <div className="flex gap-10 justify-center ">
        <Smalcard imageSrc1="{circle-outline}" imageSrc2="" text="Forex" />
        <Smalcard
          imageSrc1="/images/image1.jpg"
          imageSrc2="@\app\images\plus.png"
          text="Text between pictures 1 and 2"
        />
        <Smalcard
          imageSrc1="/images/image1.jpg"
          imageSrc2="/images/image2.jpg"
          text="Text between pictures 1 and 2"
        />
        <Smalcard
          imageSrc1="/images/image1.jpg"
          imageSrc2="/images/image2.jpg"
          text="Text between pictures 1 and 2"
        />
        <Smalcard
          imageSrc1="/images/image1.jpg"
          imageSrc2="/images/image2.jpg"
          text="Text between pictures 1 and 2"
        />
      </div>
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
