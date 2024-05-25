import React from 'react';
import TypedText from './TypedText';
import background from '../assets/Background.png';

const Home = () => {
  const openSeniorBookio = () => {
    window.open("https://services.bookio.com/progressbarber/widget", "_blank");
  }

  const openJuniorBookio = () => {
    window.open("https://services.bookio.com/progressbarber-1htsussz/widget", "_blank");
  }

  return (
    <section id="home" className="h-screen w-screen bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="text-center pt-36">
        <div className="text-4xl lg:text-6xl mt-16 font-bold text-white">ProgressBarber</div>
        <div className="mt-4">
          <TypedText />
        </div>
        <div className="text-2xl mt-16 text-white">
          Objednaj sa k:
        </div>
        <div className="flex space-x-16 justify-center mt-6">
          <div>
            <button onClick={() => openSeniorBookio()} type='button' className="text-2xl ml-4 px-8 py-2 font-bold text-white rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-500 border border-orange-500 hover:bg-orange-700 hover:border-orange-700">Senior Barbers</button>
            <div className="text-orange-500 text-xl mt-4 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">ProgressBarber</div>
          </div>
          <div>
          <button onClick={() => openJuniorBookio()} type='button' className="text-2xl mr-4 px-8 py-2 font-bold text-white rounded transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-red-500 border border-red-500 hover:bg-red-700 hover:border-red-700">Junior Barbers</button>
            <div className="text-red-500 text-xl mt-4 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">AndyBarber</div>
            <div className="text-red-500 text-xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">MBarber</div>
          </div>
        </div>
        <div className="flex space-x-16 justify-center mt-12">
          <span className='font-extrabold text-orange-500 text-8xl'>Sťahujeme sa!</span>
        </div>
        <div className="grid justify-center mt-4">
          <span className='font-normal text-2xl text-white'>Od 1.7.2024 na novej adrese</span>
          <span className='font-normal mt-4 text-2xl text-white'>Nám. Sv. Juraja, č. 2244</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
