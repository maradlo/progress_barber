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

  return (
    <section
      id="home"
      className="h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center pt-36">
        <div className="text-4xl lg:text-6xl mt-16 font-bold text-white">
          ProgressBarber
        </div>
        <div className="mt-4">
          <TypedText />
        </div>
        <div className="text-2xl mt-16 text-white">Objednaj sa k:</div>
        <div className="flex space-x-16 justify-center mt-6">
          <div>
            <button
              onClick={() => openProgressBookio()}
              type="button"
              className="text-2xl ml-4 px-8 py-2 font-bold text-white rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-500 border border-orange-500 hover:bg-orange-700 hover:border-orange-700"
            >
              ProgressBarber
            </button>
          </div>
          <div>
            <button
              onClick={() => openAndyBookio()}
              type="button"
              className="text-2xl mr-4 px-8 py-2 font-bold text-white rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-red-500 border border-red-500 hover:bg-red-700 hover:border-red-700"
            >
              AndyBarber
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
