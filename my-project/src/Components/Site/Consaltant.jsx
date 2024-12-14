import React from 'react';
import { motion } from 'framer-motion';

const Consultant = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-50 py-12">
      <div className="container mx-auto px-6 text-center">
       
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Trusted Visa Consultant
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-10"
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
              className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6  hover:bg-blue-700 transition-colors duration-300"
          >
            Get Consultation Fast
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Consultant;
