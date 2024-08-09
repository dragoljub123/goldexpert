"use client";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

const FaqComponent: React.FC<Props> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleIconClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div
      className=" text-white border-b border-gray-400 border-b-1 lg:mx-16"
      onClick={handleIconClick}
    >
      <div className="flex  justify-between p-6">
        <p className="lg:text-xl text-bold">{question}</p>
        <span className="text-2xl " onClick={handleIconClick}>
          {showAnswer ? "-" : "+"}
        </span>
      </div>
      {showAnswer && <p className="p-6 text-sm text-gray-400">{answer}</p>}
    </div>
  );
};

export default FaqComponent;
