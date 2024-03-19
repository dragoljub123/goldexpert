import { title } from "process";
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import "../globals.css";

export const Navbar = () => {
  const navigation = [
    { title: "Trading", href: "/" },
    { title: "Tools", href: "/features" },
    { title: "Partnership", href: "/about" },
    { title: "Help", href: "/studio" },
    { title: "About ", href: "/studio" },
  ];
  return (
    <div className="w-full pozadina h-20   top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Capitalrevo" className="text-black " />
        <div className="hidden md:inline-flex items-center gap-10 text-white hover:text-white duration-200">
          {navigation.map((item) => (
            <Link key={item?.title} href={item?.href} className="text-sm   ">
              {item?.title}
              <span className="" />
            </Link>
          ))}
          <button className=" text-white granica rounded-2xl  w-8/12">
            Log in
          </button>
          <button className="bg-green-500 text-white  rounded-2xl  w-8/12">
            Sing up
          </button>
        </div>

        <div className="md:hidden">
          <FiMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};
