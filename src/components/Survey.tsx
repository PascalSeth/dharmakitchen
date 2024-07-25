import Image from "next/image";
import React from "react";

const Survey = () => {
  return (
    <div className="p-10 w-full h-full">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="flex justify-center lg:justify-end">
          <Image
            className="rounded-lg shadow-lg w-full h-auto lg:h-[90vh] object-cover"
            src="/survey.png"
            width={1000}
            height={600}
            alt="survey image"
          />
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Survey
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold pt-3 leading-tight">
            About our <span className="text-accent">Food</span>
          </h2>
          <div className="mt-10 space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              vel, repudiandae fugiat veritatis blanditiis consectetur? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;
