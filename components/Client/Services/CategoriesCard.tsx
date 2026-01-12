import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import { ServiceCategory } from "./types";

const randomColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-700",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-indigo-500",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * randomColors.length);
  return randomColors[randomIndex];
};

const CategoriesCard = (category: ServiceCategory) => {
  return (
      <div
        className={`${getRandomColor()} h-[16vh] rounded-md p-4 flex   gap-4`}
      >
        <div>
          <h2 className=" md:text-2xl text-lg font-medium text-white">
            {category.name}
          </h2>
          <p className=" text-white mt-2">{category.description}</p>
        </div>
        <div className="ml-auto flex items-center bg-secondary/20 h-full  p-3 rounded-md">
          <Icon
            icon={category.icon || "streamline-kameleon-color:wall-e"}
            fontSize={80}
          />
        </div>
      </div>
  );
};

export default CategoriesCard;
