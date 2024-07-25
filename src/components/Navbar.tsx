import Image from "next/image";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="items-center z-[9999] overflow-hidden p-4 w-full sticky bg-white top-0 left-0 right-0">
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <Image src="/logo2.png" width={30} height={30} alt="logo" />
        <ul className="md:flex gap-8 items-center font-semibold text-[14px] hidden">
          <li className="hover:text-accent hover:cursor-pointer">Home</li>
          <li className="hover:text-accent hover:cursor-pointer">About</li>
          <li className="hover:text-accent hover:cursor-pointer">Food</li>
          <li className="hover:text-accent hover:cursor-pointer">Dish</li>
          <li className="hover:text-accent hover:cursor-pointer">Contact</li>
          <button className="bg-accent text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
