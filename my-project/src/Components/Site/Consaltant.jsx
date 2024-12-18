import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Consultant = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 text-center border p-6">
       
        <motion.h1
          className="text-4xl md:text-5xl font-bold text--600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Trusted Visa Consultant
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto mb-10 font-semibold "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We help you achieve your dream of studying or working abroad with expert guidance, tailored services, and proven success stories.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Study Abroad Services',
              description: 'Expert counseling and visa processing for students.',
              icon: '🎓',
            },
            {
              title: 'Work Abroad Guidance',
              description: 'Career opportunities and work visa assistance.',
              icon: '💼',
            },
            {
              title: 'Immigration Support',
              description: 'Hassle-free immigration and relocation services.',
              icon: '✈️',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 hover:scale-105  transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-600 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-xs">{service.description}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
        <Link to={`/visiting-visa`}>
        <a
            href="#contact"
            className="inline-block bg-red-600 text-white font-semibold py-3 px-6  hover:bg-blue-700 transition-colors duration-300"
          >
            Get Consultation Fast
          </a>
        </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultant;
