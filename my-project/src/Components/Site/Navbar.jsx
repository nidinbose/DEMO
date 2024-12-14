import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
 
        <div className="text-2xl font-bold text-red-600">
          StudyAbroad
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li className="hover:text-blue-600 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-blue-600 transition duration-300">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-blue-600 transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-600 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>

       
        <div className="hidden md:block">
          <a
            href="#get-started"
            className="bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition duration-300"
          >
            call : 123456789
          </a>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
                  <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
