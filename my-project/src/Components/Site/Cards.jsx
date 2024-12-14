import React from 'react';
import { motion } from 'framer-motion';

const Cards = () => {
  const countries = [
    { name: 'France', image: 'https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower_2x3.jpg' },
    { name: 'Japan', image: 'https://www.pelago.com/img/countries/japan/1201-0821_japan-book-things-to-do-pelago.jpg' },
    { name: 'Italy', image: 'https://lp-cms-production.imgix.net/2024-08/Italy-Bellagio-Roberto-Moiola-Sysaworld-GettyImages-1283925582-RFE.jpg?fit=crop&w=3840&auto=format&q=75' },
    { name: 'Australia', image: 'https://www.kayak.co.in/rimg/dimg/43/4b/72c43e11-city-2258-17a3a42c3ab.jpg?width=1600&height=1200&xhint=1597&yhint=1522&crop=true' },
    { name: 'Canada', image: 'https://www.avanse.com/blogs/images/28-mar-2023-blog.jpg' },
    { name: 'India', image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/29/full/1722227149-673.jpg?im=FeatureCrop,size=(826,465)' },
    { name: 'Brazil', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/22/12/7d/caption.jpg?w=500&h=400&s=1' },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D' },
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-green-500 flex items-center justify-center py-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-16">Countries to Visit</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                      <motion.img
                src={country.image}
                alt={country.name}
                className="w-full h-64 bg-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-bold ">{country.name}</p>
              </div>
              <div className="p-6 ">
                <h2 className="text-3xl font-bold text-gray-500 mb-2">{country.name}</h2>
                <p className="text-cyan-600">
                  Explore the beauty of {country.name} and its rich culture.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

