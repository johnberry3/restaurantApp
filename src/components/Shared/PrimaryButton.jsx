import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <div className="flex items-center group">
      <button className="bg-primary text-white h-[40px] px-3">Choose Your Meal Plan</button>
      <FaArrowRight className="inline-block bg-primaryDark text-white group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px]"/>
    </div>
  )
};

export default PrimaryButton;
