import { Navbar } from "../components/Navbar";
import Image from "next/image";
import "../globals.css";
import ContactForm from "../components/ContactForm";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="pozadinaboja2  ">
        <Navbar />
        <div className="my-40 ">
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

      <div className=" bojakarticeUS">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}
