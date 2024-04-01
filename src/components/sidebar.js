import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); 
  };

  return (
    <div className="flex flex-col md:flex-row">
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded fixed top-4 left-4 z-10"
        onClick={toggleSidebar}
      >
        <FaBars className="w-4 h-4" />
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-[#171717] text-white w-64 md:w-auto transition-transform duration-300 ease-in-out fixed top-0 left-0 bottom-0 pt-16 md:pt-0`}
      >
      
        <nav>
          <ul className="list-none p-20">
            <li className="mb-12 md:mb-10">
              <a
                href="#"
                className="flex items-center md:justify-center text-lg md:text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaHome className="mr-4 md:mr-0" />
                <span className="hidden ml-2 md:inline-block">Dashboard</span>
              </a>
            </li>
            <li className="mb-12 md:mb-10">
              <a
                href="#"
                className="flex items-center md:justify-center text-lg md:text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaInfoCircle className="mr-4 md:mr-0" />
                <span className="hidden ml-2 md:inline-block">About</span>
              </a>
            </li>
            <li className="mb-12 md:mb-10">
              <a
                href="/"
                className="flex items-center md:justify-center text-lg md:text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaBriefcase className="mr-4 md:mr-0" />
                <span className="hidden ml-2 md:inline-block">Services</span>
              </a>
            </li>
            <li className="mb-12 md:mb-10">
              <a
                href="#"
                className="flex items-center md:justify-center text-lg md:text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaEnvelope className="mr-4 md:mr-0" />
                <span className="hidden ml-2 md:inline-block">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
};

export default Sidebar;