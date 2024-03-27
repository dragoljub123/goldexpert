import React from "react";
import CRlogo2 from "../images/CRlogo2.png";
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
    <div>
      <div className="flex justify-evenly py-10">
        <Image
          src={paypalImage}
          alt="PayPal"
          width={100}
          height={100}
          className=" object-contain"
        />
        <Image
          src={bitcoinImage}
          alt="Bitcoin"
          width={100}
          height={100}
          className=" object-contain"
        />
        <Image
          src={usdtImage}
          alt="USDT"
          width={100}
          height={100}
          className=" object-contain"
        />
        <Image
          src={razorpayImage}
          alt="Razorpay"
          width={100}
          height={100}
          className=" object-contain"
        />
        <Image
          src={rupeepayImage}
          alt="Rupeepay"
          width={100}
          height={100}
          className=" object-contain"
        />
        <Image
          src={swiffyEftImage}
          alt="Swiffy Eft"
          width={100}
          height={100}
          className=" object-contain"
        />
        <Image
          src={ushpayImage}
          alt="Ushpay"
          width={80}
          height={100}
          className=" object-contain"
        />
        <Image
          src={h2payImage}
          alt="H2pay"
          width={50}
          height={100}
          className=" object-contain"
        />
      </div>

      <footer className="flex justify-between text-[#717171] border-t-[1px]">
        <div className="footer-left font-[Manrope] text-[18px] py-10  text-left">
          <Link href={"/"}>
            <Image src={CRlogo2} alt="slika" className=" object-contain" />
          </Link>
          <p>© 2023 Capital Revo · All rights reserved</p>
          <p>
            Griffith Corporate Centre
            <br />
            Suite 305, Beachmont,
            <br />
            Kingstown, St Vincent and Grenadines
          </p>
          <div className="social-icons flex gap-2 ">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
          <p>All rights reserved</p>
        </div>

        <div className="footer-right flex flex-row w-[Hug (1,047px)px] h-[Hug (152px)px] top-[222px] left-[353px] gap-[41px] opacity-[0px] py-10">
          <div className="footer-column ">
            <h4 className="font-[Manrope] text-[18px] font-bold leading-[24px] text-left">
              TRADING
            </h4>
            <ul>
              <li>
                <a href="#">Accounts</a>
              </li>
              <li>
                <a href="#">Instruments</a>
              </li>
              <li>
                <a href="#">Withdrawals and Deposits</a>
              </li>
              <li>
                <a href="#">Copytrading</a>
              </li>
              <li>
                <a href="#">Synthetic Trading</a>
              </li>
            </ul>
          </div>
          <div className="footer-column ">
            <h4 className="font-[Manrope] text-[18px] font-bold leading-[24px] text-left">
              TOOLS
            </h4>
            <ul>
              <li>
                <a href="#">Web Trader</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
              <li>
                <a href="#">Trading Calendar</a>
              </li>
              <li>
                <a href="#">Forex Calculator</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-[Manrope] text-[18px] font-bold leading-[24px] text-left">
              PARTNERSHIP
            </h4>
            <ul>
              <li>
                <a href="#">Introducing broker</a>
              </li>
              <li>
                <a href="#">Become a partner</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="font-[Manrope] text-[18px] font-bold leading-[24px] text-left">
              HELP
            </h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <p className="text-[#717171]  ">
        Contracts for Difference (“CFDs”) are leveraged products and carry a
        high level of risk to your capital as prices may move rapidly against
        you. Losses can exceed your deposits and you may be required to make
        further payments. These products may not be suitable for all clients
        therefore ensure you understand the risks and seek independent advice.
        Capital Revo Limited with its registered office at No 169, Ademola
        Adetokunbo Crescent, Wuse 2, Abuja. Capital Revo Group is a financial
        technology provider registered under the number 1713236 in BVI. Capital
        Revo products and services are not intended for Belgium, US and Canada
        residents.
      </p>
    </div>
  );
};
