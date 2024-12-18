import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Menon",
    feedback:
      "Amazing service! The team guided me through the entire process seamlessly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Ajay",
    feedback:
      "The best consultancy service I've ever experienced. They helped me achieve my dream of studying abroad.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Ruben",
    feedback:
      "Their visa processing was quick and hassle-free. I couldn't have asked for a better experience!",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Abhiram",
    feedback:
      "The team was supportive and professional. I’m now working abroad thanks to their guidance!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const HappyClients = () => {
  return (
    <div className="bg-white pt-5">
      <div className="container mx-auto px-6 border">
        <h2 className="text-4xl font-extrabold text-center text-black mb-8">
          Happy Clients
        </h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {testimonials.map((testimonial, index) => (
           <div
           key={index}
           className="min-w-[300px] h-[40vh] p-12 flex-shrink-0 flex items-center text-center bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
         >
           <img
             src={testimonial.image}
             alt={testimonial.name}
             className="w-20 h-20 rounded-full border-4 border-blue-500 mr-6"
           />
           <div className="flex flex-col justify-center h-full">
             <h3 className="text-lg font-semibold text-blue-600 mb-2">
               {testimonial.name}
             </h3>
             <p className="text-gray-700 text-center text-base leading-relaxed">
               {testimonial.feedback}
             </p>
           </div>
         </div>
         
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
