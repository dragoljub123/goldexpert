"use client";
import { title } from "process";
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import "../globals.css";
import Image from "next/image";
import Ellipse from "@/app/images/Ellipse.png";
import { useState } from "react";
import { client } from "@/sanity/lib/client";

export const Navbar = () => {
  const navigation = [
    { title: "Trading", href: "/" },
    { title: "Tools", href: "/features" },
    { title: "Partnership", href: "/about" },
    { title: "Help", href: "/studio" },
    { title: "About ", href: "/studio" },
  ];
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div className="w-full  h-16   z-50 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Capitalrevo" className="text-black " />
        <div className="hidden lg:inline-flex items-center gap-10 text-white">
          {navigation.map((item) => (
            <Link key={item?.title} href={item?.href} className="text-sm   ">
              {item?.title}
            </Link>
          ))}

          <div className=" text-center">
            <button className=" text-white granica mx-auto rounded-2xl  w-20">
              Log in
            </button>
          </div>
          <button className="bg-green-500 text-white  rounded-2xl mx-auto  w-20">
            Sing up
          </button>
          <Image src={Ellipse} alt="slika" className=" mx-auto w-6" />
        </div>

        <div className="md:hidden ">
          <button
            onClick={toggleLinks}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
          {showLinks && (
            <div className="flex flex-col absolute top-16 right-4 bg-transparent text-white p-4 rounded shadow-lg ">
              {navigation.map((item) => (
                <Link key={item?.title} href={item?.href}>
                  {item?.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
