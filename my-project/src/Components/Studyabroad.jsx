import React from 'react';

const Studyabroad = () => {
  return (
    <div className="container mx-auto mt-10 bg-white p-8 bg-red-600 border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
           <div className="flex justify-center items-center">
          <img
            src="https://chetanyacareers.com/wp-content/uploads/2024/01/study-abroad-3.jpg"
            alt="Study Abroad"
            className="max-w-full h-auto shadow-md"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            Explore Study Abroad Opportunities
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Discover global education programs that open doors to top universities and unique cultural experiences.
            Whether you're planning to study in the USA, UK, Canada, or Australia, our expert advisors are here to help
            with admission processes, visa applications, and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full">
              Apply Now
            </button>
            <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300 w-full">
              Free Counseling
            </button>
            <button className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-orange-700 transition duration-300 w-full">
              Scholarship Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studyabroad;
