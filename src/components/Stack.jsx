import React from "react";
import { tech } from "../data/tech";

const Stack = () => {
  const techs = tech;

  return (
    <div
      name="stack"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-6"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white px-4">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Stack
          </p>
          <p className="pt-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-4 px-12 sm:px-0">
          {techs.map((techs) => (
            <div
              key={techs.id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${techs.style}`}
            >
              <img src={techs.src} alt="" className="w-20 mx-auto" />
              <p className="mt-2">{techs.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
