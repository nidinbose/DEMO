import React from 'react';

const JobConsultancy = () => {
  return (
    <div className="container mx-auto mt-10 bg-white p-8  border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
      
        <div className="flex justify-center items-center">
          <img
            src="https://www.y-axis.com/assets/cms/2023-09/Counseling.webp"
            alt="Job Consultancy"
            className="max-w-full h-auto "
          />
        </div>

       
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            Career Counseling & Job Consultancy
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            We provide professional career counseling services to guide you in choosing the right job path. Our experts
            help you craft resumes, improve interview skills, and find opportunities that match your skills and aspirations.
          </p>
          
        
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
  <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full">
    Consultation 1
  </button>
  <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition duration-300 w-full">
    Consultation 2
  </button>
  <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition duration-300 w-full">
    Consultation 3
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default JobConsultancy;
