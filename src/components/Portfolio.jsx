import React from 'react';
import data from '../data/data';

const Portfolio = () => {
  const portfolios = data;

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-gray-300 pt-6"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300">
            Portfolio
          </p>
          <p className="pt-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-12 sm:px-0">
          {portfolios.map((portfolios) => (
            <div key={portfolios.id} className="shadow-md shadow-gray-600 rounded-lg content-div">
              <img
                src={portfolios.src}
                alt={portfolios.name}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="w-full flex items-center justify-center gap-8 pt-2">
                <a
                  href={portfolios.live}
                // eslint-disable-next-line
                target="live">
                  <button
                    type="button"
                    className=" duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href={portfolios.github}
                // eslint-disable-next-line
                target="github">
                  <button
                    type="button"
                    className="duration-200 hover:scale-105"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
