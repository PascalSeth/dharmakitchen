import Image from "next/image";
import React from "react";
import Dash from "./Dash";

const Featured = () => {
  return (
    <div className="p-10 w-full h-full">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Our</h2>
        <h2 className="text-5xl font-bold pt-2">
          Featured <span className="text-accent">Food</span>
        </h2>
        <p className="max-w-[550px] pt-5 mx-auto text-gray-700 text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
          repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
          ipsum dolor sit amet.
        </p>
        <Dash />
      </div>

      <div className="grid md:grid-cols-3 gap-16 mt-10">
        <div className="w-fit mx-auto self-end text-center">
          <Image
            className="w-[300px] h-[300px] shadow-2xl rounded-lg transform transition duration-500 hover:scale-105"
            src="/grid__1.png"
            width={300}
            height={300}
            alt="Shrimp Salad"
          />
          <div className="space-y-4 mt-4">
            <Dash />
            <h2 className="font-medium text-2xl">Shrimp Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto text-center">
          <Image
            className="w-[300px] h-[300px] shadow-2xl rounded-lg transform transition duration-500 hover:scale-105"
            src="/grid__2.png"
            width={300}
            height={300}
            alt="Baked Apples"
          />
          <div className="space-y-4 mt-4">
            <Dash />
            <h2 className="font-medium text-2xl">Baked Apples</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto self-end text-center">
          <Image
            className="w-[300px] h-[300px] shadow-2xl rounded-lg transform transition duration-500 hover:scale-105"
            src="/grid__3.png"
            width={300}
            height={300}
            alt="Cherries Chicken"
          />
          <div className="space-y-4 mt-4">
            <Dash />
            <h2 className="font-medium text-2xl">Cherries Chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
