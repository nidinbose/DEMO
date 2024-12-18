import React from "react";
import { motion } from "framer-motion";
import { AiOutlinePhone } from 'react-icons/ai';

const Service = () => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container mx-auto mt-10 px-6 sm:px-12 lg:px-20 border pb-10">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 mt-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
     
        <motion.div
          className="bg-white border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
        >
          <div className="w-full h-64 mb-4 overflow-hidden ">
            <img
              src="https://5.imimg.com/data5/GB/JT/GLADMIN-48059143/travel-visa-services.jpg"
              alt="Visiting Visa"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Visiting Visa</h2>
          <p className="text-gray-600 mb-6 text-xs font-bold">
            Simplify your travel plans with our visiting visa services. Get
            expert guidance on documentation and applications.
          </p>
          <a
      href="https://wa.me/12345" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-white text-orange-300 border border-orange-300 hover:text-white py-3 px-6 font-semibold hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2"
    >
      <AiOutlinePhone className="text-xl" />
      Contact Now
    </a>
        </motion.div>

                <motion.div
          className="bg-white border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
        >
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              src="https://www.multirecruit.com/wp-content/uploads/2023/10/Choosing-the-Right-IT-Job-Consultancy-in-Bangalore-Factors-to-Consider.jpg"
              alt="Job Consultancy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Job Consultancy</h2>
          <p className="text-gray-600 mb-6 text-xs font-bold">
            Unlock your potential with expert career advice. Resume building,
            interview prep, and job placements are just a click away.
          </p>
          <a
      href="https://wa.me/12345" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-white text-orange-300 border border-orange-300 hover:text-white py-3 px-6 font-semibold hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2"
    >
      <AiOutlinePhone className="text-xl" />
      Contact Now
    </a>
        </motion.div>
        <motion.div
          className="bg-white border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
        >
          <div className="w-full h-64 mb-4 overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?semt=ais_hybrid"
              alt="Study Abroad"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-3">Study Abroad</h2>
          <p className="text-gray-600 mb-6 text-xs font-bold">
            Explore global education opportunities. Get assistance with
            admissions, scholarships, and visa applications.
          </p>
          <a
      href="https://wa.me/12345" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-white text-orange-300 border border-orange-300 hover:text-white py-3 px-6 font-semibold hover:bg-orange-500 transition duration-300 flex items-center justify-center gap-2"
    >
      <AiOutlinePhone className="text-xl" />
      Contact Now
    </a>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Service;

