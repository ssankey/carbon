import React from 'react';
import BarChart from './BarChart';
import Card from './card';

const MainContent = ({ isOpen }) => {
  return (
    <main
      className={`flex-grow p-4 ${
        isOpen ? 'md:ml-64' : 'md:ml-16'
      } transition-all duration-300 ease-in-out`}
    >
      <h1 className="text-2xl text-white font-bold mb-4">
        Welcome to <span className="text-green-400">Spot Trading</span>
      </h1>
      <div
        className={`chart-container ${
          isOpen ? 'md:ml-10' : 'md:ml-0'
        } h-80 p-4 bg-[#171717] md:w-[95%] rounded-2xl`}
      >
        <BarChart />
      </div>
      <div
        className={`card-container ${
          isOpen ? 'md:ml-10' : 'md:ml-0'
        } mt-4 p-4 bg-[#171717] md:w-[500px] rounded-2xl sm:w-full`}
      >
        <Card />
      </div>

      <div
        className={`card-container ${
          isOpen ? 'md:ml-10' : 'md:ml-0'
        } mt-4 p-4 bg-[#171717] md:w-[500px] rounded-2xl sm:w-full`}
      >
      </div>
    </main>
  );
};

export default MainContent;