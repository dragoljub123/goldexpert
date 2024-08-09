import { Navbar } from "../components/Navbar";
import "../globals.css";
import ContactForm from "../components/ContactForm";
import React from "react";

import Suportkartica2 from "../components/Suportkartica2";

export default function ContactUs() {
  return (
    <div className="mx-auto">
      <div className="pozadinaFQ ">
        <Navbar />
        <div className=" py-20">
          <div className="max-w-screen-1440p  mx-auto flex items-center justify-center">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center px-4 lg:px-0 h-full mb-20 slideUpAnimacija">
              <h1 className="text-2xl text-white font-bold mb-6 mt-6 text-center lg:text-4xl">
                Contact Us
              </h1>
              <p className="text-white mb-4">Have questions or need help?</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-lightblue text-center mx-auto p-4 space-y-4 shadow-md">
        <h1 className="font-bold text-white text-2xl">24/5 support</h1>
        <p className="text-white">
          We&apos;re here to help. Reach out to us using the contact form below
          or through our support channels.
        </p>
        <div className="bg-lightblue flex flex-col lg:flex-row justify-center items-center mx-auto ">
          <div className="flex flex-col max-w-screen-1440p   p-4">
            <ContactForm />
          </div>
          <div className="flex flex-col   justify-evenlyn   gap-10">
            <div className="">
              <Suportkartica2
                title2=""
                title="000 111 222 333"
                imageSrc="/phonee.png"
                description="Call us directly if you need any urgent help. Our agents will help you."
              />
            </div>
            <div className="">
              <Suportkartica2
                title2=""
                title="support@goldexpert.ai"
                imageSrc="/Message.png"
                description="Email us directly if you need any help. Our agents will help you."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
