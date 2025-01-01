import React from "react";
import TypedText from "./TypedText";
import background from "../assets/Background.png";

const Home = () => {
  const openProgressBookio = () => {
    window.open("https://services.bookio.com/progressbarber/widget", "_blank");
  };

  const openAndyBookio = () => {
    window.open(
      "https://services.bookio.com/progressbarber-and-coll/widget",
      "_blank"
    );
  };

  const openKatkaBookio = () => {
    window.open(
      "https://services.bookio.com/progressbarber-k0bhs015/widget?lang=sk",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center pt-36">
        <div className="text-4xl lg:text-6xl mt-16 font-bold text-white drop-shadow-lg">
          ProgressBarber
        </div>
        <div className="mt-4">
          <TypedText />
        </div>
        <div className="text-2xl mt-16 text-white font-light">
          Objednaj sa k:
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center justify-center mt-6 px-4">
          <div className="w-full md:w-auto">
            <button
              onClick={() => openProgressBookio()}
              type="button"
              className="group relative w-full md:w-64 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10">ProgressBarber</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            </button>
          </div>

          <div className="w-full md:w-auto">
            <button
              onClick={() => openAndyBookio()}
              type="button"
              className="group relative w-full md:w-64 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-600 rounded-lg shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10">AndyBarber</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            </button>
          </div>

          <div className="w-full md:w-auto">
            <button
              onClick={() => openKatkaBookio()}
              type="button"
              className="group relative w-full md:w-64 px-6 py-3 text-lg font-medium text-gray-800 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex flex-col">
                <span>KatkaBarber</span>
                <span className="text-sm font-normal">
                  Junior barber - zľavnené ceny
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
