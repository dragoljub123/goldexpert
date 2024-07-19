import React from "react";
import goldexpertlogo2 from "../images/goldexpertlogo2.png";
import Image from "next/image";
import paypalImage from "@/public/PayPal .png";
import bitcoinImage from "@/public/bitcoin.png";
import usdtImage from "@/public/USDT1.png";
import razorpayImage from "@/public/Razorpay1.png";
import rupeepayImage from "@/public/Rupeepay1.png";
import swiffyEftImage from "@/public/SwiffyEft-L.png";
import ushpayImage from "@/public/ushpay.png";
import h2payImage from "@/public/h2pay.png";

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
    <div className=" my-10 mx-10 ">
      <footer className="flex justify-between  border-b-[1px] mb-5">
        <div className="">
          <Link href={"/"}>
            <Image
              src={goldexpertlogo2}
              alt="slika"
              className=" object-contain"
            />
          </Link>
        </div>

        <ul className=" flex justify-between gap-7">
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
        </ul>

        <div className="social-icons flex gap-4 ">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </footer>
      <p className=" text-center ">2024 Goldexpert. All rights reserved</p>
    </div>
  );
};
