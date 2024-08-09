import React from "react";
import goldexpertlogo2 from "../images/goldexpertlogo2.png";
import Image from "next/image";
import "../globals.css";
import { FaDiscord } from "react-icons/fa";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { link } from "fs";

export const FooterHome: React.FC = () => {
  return (
    <div className=" mt-10 max-w-screen-1440p mx-auto px-20">
      <footer className="lg:flex  justify-between items-center border-b-[1px] mb-5">
        <div className="flex justify-center items-center ">
          <Link href={"/"}>
            <Image
              src={goldexpertlogo2}
              alt="slika"
              className=" object-contain"
            />
          </Link>
        </div>

        <ul className=" lg:flex  text-center lg:gap-7">
          <li>
            <a href="\AboutUS">About us</a>
          </li>
          <li>
            <a href="\Tradingrobots">Trading robots</a>
          </li>
          <li>
            <a href="\AboutUS">About</a>
          </li>
          <li>
            <a href="\ContactUs">Contact</a>
          </li>
          <li>
            <a href="\FAQs">FAQs</a>
          </li>
        </ul>

        <div className="social-icons flex gap-4  justify-center items-center my-4 text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://discord.com/your-server-invite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
      <p className=" text-center ">2024 Goldexpert. All rights reserved</p>
    </div>
  );
};
