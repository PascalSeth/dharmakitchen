import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-16 px-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectetur quibusdam eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">The Restaurant</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-accent transition">About Us</li>
            <li className="hover:text-accent transition">Chefs</li>
            <li className="hover:text-accent transition">Events</li>
            <li className="hover:text-accent transition">Contact</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-6 text-accent text-2xl">
            <FaFacebookF className="hover:text-white transition" />
            <BsTwitter className="hover:text-white transition" />
            <BsPinterest className="hover:text-white transition" />
            <FaLinkedinIn className="hover:text-white transition" />
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-10 text-center text-sm text-gray-400">
        &copy; 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
