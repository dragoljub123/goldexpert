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
    { title: "Home", href: "/" },
    { title: "Trading robots", href: "/Tradingrobots" },
    { title: "About", href: "/AboutUS" },
    { title: "Contact", href: "/ContactUs" },
  ];
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="w-full h-16 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Capitalrevo" className="text-black" />
        <div className="hidden lg:inline-flex items-center gap-10 text-white">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm hover:text-zlatna"
            >
              {item.title}
            </Link>
          ))}
          <button className="bg-customBlue text-white px-12 py-1 rounded-3xl hover:bg-zlatna transition-colors duration-300 w-25">
            Get started
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleLinks}
            className="text-white text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
          {showLinks && (
            <div className="fixed top-0 right-0 w-64 h-full bg-lightblue text-white p-4 shadow-lg transition-transform transform translate-x-0 z-50">
              <button
                onClick={toggleLinks}
                className="text-white text-2xl focus:outline-none mb-4"
              >
                &times;
              </button>
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block mb-4 hover:text-zlatna"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
