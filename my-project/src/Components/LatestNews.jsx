import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";

const LatestNews = () => {
  const newsData = [
    { id: 1, title: "News Title 1", description: "Good news", image: "https://www.y-axis.com/assets/cms/2023-09/Counseling.webp" },
    { id: 2, title: "News Title 2", description: "Brief news", image: "https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp" },
    { id: 3, title: "News Title 3", description: "News 3", image: "https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp" },
    { id: 4, title: "News Title 4", description: "News 4", image: "https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp" },
    { id: 5, title: "News Title 5", description: "News 5", image: "https://www.y-axis.com/assets/cms/2023-09/Counseling.webp" },
    { id: 6, title: "News Title 6", description: "News 6", image: "https://www.y-axis.com/assets/cms/2023-09/Counseling.webp" },
    { id: 7, title: "News Title 2", description: "Brief news", image: "https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp" },
    { id: 8, title: "News Title 2", description: "Brief news", image: "https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="container mx-auto p-12 mt-7">
      <h2 className="text-2xl font-bold mb-6 text-start text-teal-500 text-xl xl:text-4xl font-space-grotesk">
        Latest News
      </h2>

      <hr className="mt-10 mb-5" />

      <h1 className="text-4xl mb-9 xl:mb-[13vh] font-bold">
        <span className="text-teal-500 font-space-grotesk">Latest</span> updates
        of benefits <br />
        Explore <span className="text-teal-500">Everywhere</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-7">
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className="relative group bg-white border hover:border-teal-500 overflow-hidden transition-shadow duration-300"
            data-aos={
              index % 2 === 0
                ? "fade-right"
                : index % 3 === 0
                ? "fade-left"
                : "fade-up"
            }
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-80 bg-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-4">
              <p className="text-gray-600 text-sm">{news.description}</p>
            </div>
            <motion.div
              className="absolute inset-0 bg-teal-500 bg-opacity-50 flex items-center justify-center text-white opacity-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.p
                className="text-xl px-4"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <IoSearch  className="w-12 h-12 text-white"/>
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews