import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-10 bg-white p-8 border border-gray-200 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-tight">
            About Benefits International
          </h1>
          <p className="text-base text-gray-600">
            Benefits International is a trusted consultancy firm with over a decade of experience providing exceptional
            services to individuals seeking visiting visas, career guidance, and personalized support for international
            travel and settlement. Our mission is to simplify complex processes and ensure our clients achieve their goals
            with ease.
          </p>
          <p className="text-base text-gray-600">
            We specialize in a wide range of services, including visa assistance, career counseling, and travel planning.
            With a dedicated team of experts, we are committed to offering the highest level of professionalism and care to
            meet your unique needs.
          </p>
          <a
      href="tel:+11234567890"
      className="text-red-500 hover:text-white font-semibold py-3 px-8 border hover:bg-red-600 transition duration-300 w-full sm:w-60"
    >
      <button className="w-full">
        Contact Us
      </button>
    </a>
        </div>

               <div className="flex justify-center items-center">
          <img
            src="https://kommandtravel.com/wp-content/uploads/2023/02/Study_Visa1.jpg"
            alt="About Benefits International"
            className="max-w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
