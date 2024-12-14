import React from 'react';
import { FaPhone } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto py-16 px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                  <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://www.admissify.com/blog/wp-content/uploads/2022/10/How-To-Choose-The-Best-Education-Consultant-Know-In-Details.jpg"
              alt="Study Abroad"
              className="w-full h-full object-cover"
            />
          </div>

                 <div className="flex flex-col justify-center text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
              Study, Work, or <br /> Explore Opportunities <br /> Abroad
            </h1>
            <p className="text-gray-600 text-lg">
              Discover the path that suits you best. Whether it's pursuing education,
              building a career, or exploring new cultures, we guide you every step of the way.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 p-6 gap-4 mx-auto md:mx-0 text-lg font-medium text-white">
              <div
                className="flex items-center justify-center h-24 py-2 px-4 bg-[url('https://romebusinessschool.com/wp-content/uploads/2023/10/adwefdgv.webp')] bg-cover bg-center rounded-md shadow hover:scale-105 transition-transform duration-300"
              >
                Study
              </div>
              <div
                className="flex items-center justify-center h-24 py-2 px-4 bg-[url('https://vananservices.com/blog/wp-content/uploads/2022/05/The-Challenges-faced-While-Migrating-to-the-US.png')] bg-cover bg-center rounded-md shadow hover:scale-105 transition-transform duration-300"
              >
                Migrate
              </div>
              <div
                className="flex items-center justify-center h-24 py-2 px-4 bg-[url('https://tivazo.com/wp-content/uploads/2024/05/Top-Advantages-and-Disadvantages-of-Working-from-Home-img.webp')] bg-cover bg-center rounded-md shadow hover:scale-105 transition-transform duration-300"
              >
                Work
              </div>
              <div
                className="flex items-center justify-center h-24 py-2 px-4 bg-[url('https://blog.dookinternational.com/images/post-media/Z4G0Z1682335149.jpg')] bg-cover bg-center rounded-md shadow hover:scale-105 transition-transform duration-300"
              >
                Visit
              </div>
            </div>
            <button className="bg-red-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-violet-700 transition-all mt-4 flex items-center justify-center space-x-2">
              <FaPhone className="h-5 w-5" /> 
              <span>Contact Axis</span>
            </button>
        
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <img
              src="https://www.ketchum.edu/sites/default/files/2022-08/First%20%28Top%29%20Image%20.jpeg"
              alt="Study"
              className="mx-auto mb-4 rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Study</h2>
            <p className="text-gray-600">
              Explore world-class education and get access to top universities globally.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYxiiyBMOh6rifjvbkvyqDsBpx7AkGFSqHAtk6UFWGJ6WgW1xJAoiiUIuEVG05-PRUuo&usqp=CAU"
              alt="Migrate"
              className="mx-auto mb-4 rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Migrate</h2>
            <p className="text-gray-600">
              Start a new life in your dream country with seamless migration assistance.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <img
              src="https://www.jobhopin.com/blog/wp-content/uploads/2020/03/lam-sao-de-work-from-home-hieu-qua-1-1024x759.jpeg"
              alt="Work"
              className="mx-auto mb-4 rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Work</h2>
            <p className="text-gray-600">
              Find job opportunities abroad and grow your career internationally.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
            <img
              src="https://travelothon.com/wp-content/uploads/2023/06/Neemrana-Fort-1-min.jpg"
              alt="Visit"
              className="mx-auto mb-4 rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Visit</h2>
            <p className="text-gray-600">
              Experience new cultures and breathtaking destinations around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

