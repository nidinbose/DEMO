import React from "react";
import { motion } from "framer-motion";

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
    <div className="container mx-auto mt-10 p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
               <motion.div
          className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          style={{ height: "100%" }}
        >
          <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
            <img
              src="https://5.imimg.com/data5/GB/JT/GLADMIN-48059143/travel-visa-services.jpg"
              alt="Visiting Visa"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Visiting Visa</h2>
          <p className="text-gray-700">
            Simplify your travel plans with our visiting visa services. Get
            expert guidance on documentation and applications.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-6 border transition duration-300">
            Learn More
          </button>
        </motion.div>
            <motion.div
          className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          style={{ height: "100%" }}
        >
          <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
            <img
              src="https://www.multirecruit.com/wp-content/uploads/2023/10/Choosing-the-Right-IT-Job-Consultancy-in-Bangalore-Factors-to-Consider.jpg"
              alt="Job Consultancy"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Job Consultancy
          </h2>
          <p className="text-gray-700">
            Unlock your potential with expert career advice. Resume building,
            interview prep, and job placements are just a click away.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-6 border transition duration-300">
            Learn More
          </button>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-shadow duration-300"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          style={{ height: "100%" }}
        >
          <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
            <img
              src="https://img.freepik.com/free-photo/high-angle-passport-tickets-arrangement_23-2148786166.jpg?semt=ais_hybrid"
              alt="Study Abroad"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Study Abroad</h2>
          <p className="text-gray-700">
            Explore global education opportunities. Get assistance with
            admissions, scholarships, and visa applications.
          </p>
          <button className="mt-4 bg-green-600 text-white py-2 px-6 border transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;

