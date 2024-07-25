'use client'
import React, { useState } from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";

const menuData = [
  {
    img: "https://i.pinimg.com/236x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg",
    title: "Delicious Cake",
    desc: "A delicious cake with a variety of flavors.",
    price: "$29.50",
    category: "Desert",
  },
  {
    img: "https://i.pinimg.com/236x/58/8f/3b/588f3be0048fe897431cf3b209c029b9.jpg",
    title: "Vanilla Ice Cream",
    desc: "Smooth and creamy vanilla ice cream.",
    price: "$15.00",
    category: "Desert",
  },
  {
    img: "/pizza.jpg",
    title: "Italian Pizza",
    desc: "Classic Italian pizza with fresh ingredients.",
    price: "$25.00",
    category: "Appetizers",
  },
  {
    img: "https://i.pinimg.com/236x/4c/22/08/4c22083319034ab9d64d244819be8683.jpg",
    title: "Bruschetta",
    desc: "Grilled bread topped with fresh tomatoes and basil.",
    price: "$12.00",
    category: "Appetizers",
  },
  {
    img: "https://i.pinimg.com/564x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg",
    title: "Pancakes",
    desc: "Fluffy pancakes with syrup and butter.",
    price: "$10.00",
    category: "Breakfast",
  },
  {
    img: "https://i.pinimg.com/564x/61/b7/d1/61b7d1dce2f964a8ddac3e0bd1c38edd.jpg",
    title: "Omelette",
    desc: "A hearty omelette with cheese and vegetables.",
    price: "$12.50",
    category: "Breakfast",
  },
  {
    img: "https://i.pinimg.com/236x/eb/cb/b9/ebcbb960d5d992314b90ba13029e05b3.jpg",
    title: "Caesar Salad",
    desc: "Crispy romaine lettuce with Caesar dressing.",
    price: "$18.00",
    category: "Salads",
  },
  {
    img: "https://i.pinimg.com/236x/d3/87/51/d387515607937ec183413a3de172bdb9.jpg",
    title: "Greek Salad",
    desc: "Fresh vegetables with feta cheese and olives.",
    price: "$16.00",
    category: "Salads",
  },
  {
    img: "https://i.pinimg.com/236x/28/2e/22/282e222464666a3b7cb47b1ae41b44ad.jpg",
    title: "Grilled Steak",
    desc: "Juicy steak grilled to perfection.",
    price: "$30.00",
    category: "Meat & Fish",
  },
  {
    img: "https://i.pinimg.com/236x/2f/8b/5d/2f8b5d0bf6e405594cc26a83dd3daaa4.jpg",
    title: "Baked Salmon",
    desc: "Tender salmon fillet with herbs.",
    price: "$28.00",
    category: "Meat & Fish",
  },
  {
    img: "https://i.pinimg.com/236x/dc/88/5e/dc885e424e2cc36080e3ffaee09b6dfb.jpg",
    title: "Tomato Soup",
    desc: "Rich and creamy tomato soup.",
    price: "$8.00",
    category: "Soup",
  },
  {
    img: "https://i.pinimg.com/236x/fc/3d/d8/fc3dd8e101ee74115f0377a58e88ff6b.jpg",
    title: "Mushroom Soup",
    desc: "Savory mushroom soup with herbs.",
    price: "$9.00",
    category: "Soup",
  },
  {
    img: "https://i.pinimg.com/236x/c9/2a/55/c92a559a09b7b8187050997fbd977286.jpg",
    title: "Red Wine",
    desc: "A glass of fine red wine.",
    price: "$15.00",
    category: "Drinks",
  },
  {
    img: "https://i.pinimg.com/236x/57/cd/dd/57cddd925ee9c23164c2cfb69faf0e92.jpg",
    title: "Cocktail",
    desc: "A refreshing cocktail with fresh ingredients.",
    price: "$12.00",
    category: "Drinks",
  },
];

const categories = ["Appetizers", "Breakfast", "Salads", "Meat & Fish", "Soup", "Desert", "Drinks"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");

  const filteredMenu = menuData.filter((item) => item.category === selectedCategory);

  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed">
          Discover our delicious menu items crafted with the finest ingredients.
        </p>
        <Dash />
      </div>

      <ul className="flex justify-center gap-6 md:gap-10 lg:gap-20 mb-10">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer p-2 ${
              selectedCategory === category ? "bg-accent text-white" : "text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10">
        <div className="w-full mx-auto flex justify-center lg:justify-end">
          <img
            className="rounded-full w-[100%] max-w-[400px] h-auto shadow-lg"
            src="https://i.pinimg.com/564x/1f/b1/b5/1fb1b50ec5263cf6ae35411d0020ede2.jpg"
            width={500}
            height={500}
            alt="dish"
          />
        </div>

        <div className="grid w-full mx-auto sm:grid-cols-2 gap-4">
          {filteredMenu.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
