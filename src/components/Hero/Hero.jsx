import React from "react";
import HeroImg from "../../assets/hero.png"
import HeroBg from "../../assets/heroBg.png"
import PrimaryButton from "../Shared/PrimaryButton.jsx"

const Hero = () => {

  const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundReapeat: "no-repeat",
    backgroundPositiong:"center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%"

  }
  return (
    <div className="relative z-[-1]" style={BgStyle}>
      <div className="container">
         <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 place-items-center min-h-[600px] ">
            <div className="space-y-7  text-dark  ">
               <h1 className="text-5xl">Fresh & Healthy Meal Plan <span className="text-secondary  text-7xl font-cursive">Delivery</span> in Miami</h1>
               <p className="lg:pr-64">Delicious Meals Delivered to Your Door From $132.95 per week</p>
               <div>
              <PrimaryButton/>
            </div>
            </div>

            <div>
               <img src={HeroImg} className="w-full sm:scale-125 sm:translate-y-16" alt="" />
            </div>



         </div>

      </div>
    </div>
  )
};

export default Hero;
