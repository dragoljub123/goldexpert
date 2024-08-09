"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";
const PopupButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <button
        className="text-white bg-[#3852AC] hover:bg-[#2C3E8C] focus:outline-none focus:ring-4 focus:ring-[#3852AC] font-medium rounded-full text-lm px-5 py-2.5  me-2 mb-2 dark:bg-[#2C3E8C] dark:hover:bg-[#1E2A4B] dark:focus:ring-[#3852AC] neondugmence"
        onClick={handleOpenPopup}
      >
        Get started
      </button>
      {showPopup && <PopupForm onClose={handleClosePopup} />}
    </div>
  );
};
export default PopupButton;
