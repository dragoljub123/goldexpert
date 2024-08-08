"use client";

import React, { useState } from "react";

interface PopupFormProps {
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goldRobot, setGoldRobot] = useState(false);
  const [forexRobot, setForexRobot] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/saveFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          goldRobot,
          forexRobot,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result.message);
      onClose(); // Close the popup or perform other actions on success
    } catch (error) {
      console.error("Error saving form data:", error);
      setError("Failed to send.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <h1 className="text-xl font-bold mb-6 text-center">
          Start earning passive income today
        </h1>
        <div className="flex flex-col md:flex-row justify-center mb-6">
          <div className="flex-1 mx-2 p-2 border rounded-lg mb-4 md:mb-0">
            <div className="flex items-center justify-between mb-4">
              <label htmlFor="option1" className="font-bold">
                Gold Robot
              </label>
              <input
                type="checkbox"
                id="option1"
                className="appearance-none rounded-full h-5 w-5 border border-gray-300 checked:bg-customBlue checked:border-transparent focus:outline-none focus:ring-2 focus:ring-customBlue md:ml-2 "
                checked={goldRobot}
                onChange={(e) => setGoldRobot(e.target.checked)}
              />
            </div>
            <p className="text-sm text-gray-700">
              Programmed to capitalize on opportunities in the gold market.
            </p>
          </div>
          <div className="flex-1 mx-2 p-2 border rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <label htmlFor="option2" className="font-bold">
                Forex Robot
              </label>
              <input
                type="checkbox"
                id="option2"
                className="appearance-none rounded-full h-5 w-5 border border-gray-300 checked:bg-customBlue checked:border-transparent focus:outline-none focus:ring-2 focus:ring-customBlue md:ml-2"
                checked={forexRobot}
                onChange={(e) => setForexRobot(e.target.checked)}
              />
            </div>
            <p className="text-sm text-gray-700">
              Execute trades based on pre-programmed algorithms.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-customBlue text-white rounded-2xl"
          >
            Submit
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
