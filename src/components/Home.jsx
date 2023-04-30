import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-8 md:flex-row">
        <div className="flex flex-col justify-center">
          <p className='text-cyan-500'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
            RECILLAH KHAMALA
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-md">
          With a background in developing over 40 efficient software applications in a global market. More than 1300+ hours of experience, including mentoring 2 junior developers to achieve concrete goals on a strict deadline. Strong skills include React, Redux, JavaScript, Ruby on Rails, PostgreSQL, and Tailwind CSS!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;