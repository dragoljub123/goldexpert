import { Navbar } from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import ContactForm from "../components/ContactForm";
import React from "react";
import Suportkartice from "../components/Suportkartice";

export default function ContactUs() {
  return (
    <div>
      <div className="pozadinaboja2  ">
        <Navbar />
        <div className="py-20 ">
          <div className=" mx-auto flex items-center justify-center ">
            <div className="max-w-screen-xl mx-auto flex flex-col  justify-between items-center px-4 lg:px-0 h-full mb-20">
              <h1 className="sm:text-5xl  text-white font-bold mb-4  ">
                Contact Us
              </h1>
              <p className="text-white mb-4 ">Have questions or need help?</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bojakarticeUS flex ">
        <div className=" ">
          <ContactForm />
        </div>
        <div className="w-4/5 mx-auto">
          <Suportkartice
            title2=""
            title=" 000 111 222 333"
            imageSrc="\phonee.png"
            description="Call us directly if you need any urgent help. Our agents will help you."
          />
          <Suportkartice
            title2=""
            title=" support@goldexpert.ai"
            imageSrc="\Message.png"
            description="Email us directly if you need any help. Our agents will help you."
          />
        </div>
      </div>
    </div>
  );
}
