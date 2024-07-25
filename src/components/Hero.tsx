import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative h-fit overflow-hidden">
      <img
        className="w-full h-full object-cover absolute inset-0 -z-20"
        src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // layout="fill"
        alt="background"
      />
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/hero2.png"
        width={1000}
        height={600}
        alt="hero_bg"
      />
      <div className=" mx-auto h-[calc(100vh-120px)] flex items-center justify-start px-6">
        <div className="space-y-4 bg-white/80 backdrop-blur-lg w-fit p-8 rounded-lg shadow-lg">
          <p className="uppercase font-medium text-gray-800">Wide options of choice</p>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Delicious <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, aroma and taste.
            <br /> What are you waiting for?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px] shadow-md hover:bg-accent-dark transition duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
