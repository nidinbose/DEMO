import React from "react";
import { FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white border p-6 text-white px-4 md:px-16 w-full pb-[15vh] md:pb-[39vh] lg:pb-[45vh] xl:pb-[2vh] 2xl:pb-[2vh]">
      <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-500">
          <div>
            <h3 className="font-bold text-xl mb-4">ABOUT US</h3>
            <ul className="">
              <li>About Y Axis</li>
              <li>Careers</li>
              <li>CSR</li>
              <li>Office Network</li>
              <li>Press and News</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">TESTIMONIALS</h3>
            <ul className="">
              <li>Success Videos</li>
              <li>Customer Reviews</li>
              <li>Social Reviews</li>
              <li>Visa Success</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">BLOGS</h3>
            <ul>
              <li>Immigration News</li>
              <li>Immigration Blog</li>
              <li>Overseas Jobs</li>
              <li>Newsletter</li>
              <li>Visa Stories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">LANGUAGES</h3>
            <h4 className="text-lg font-semibold">Indian Languages</h4>
            <ul>
              <li>Hindi</li>
              <li>Tamil</li>
              <li>Gujarati</li>
              <li>Telugu</li>
              <li>Marathi</li>
              <li>Kannada</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">FORIGN LANGUAGES</h3>
       
            <ul>
            <li>Arabic</li>
              <li>French</li>
              <li>Chinese</li>
              <li>German</li>
              <li>Korean</li>
              <li>Ukrainian</li>
              <li>Italian</li>
            </ul>
          </div>

         
        </div>

           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-500">
          <div>
            <h3 className="font-bold text-xl mb-4 ">CONTACT US</h3>
            <h4 className="text-lg font-semibold ">India Y-Axis</h4>
            <p>+91 7670800001</p>
            <p>info@y-axis.com</p>
            <p>www.benifits.com</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Australia</h4>
            <p>+61 399394818</p>
            <p>australia@y-axis.com.au</p>
            <p>www.benifits.com.au</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">UAE</h4>
            <p>+971 (0)42483900</p>
            <p>dubai@y-axis.com</p>
            <p>www.benifits.ae</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">UK</h4>
            <p>+44 1253226009</p>
            <p>info@bnifits.co.uk</p>
            <p>www.benifits.co.uk</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Canada</h4>
            <p>+1 226 243 2213</p>
            <p>info@y-axis.ca</p>
            <p>www.benifits.ca</p>
          </div>
        </div>

              <div className="mt-8">
          <h3 className="font-bold text-xl mb-4 text-red-600">FOLLOW US</h3>
          <div className="flex flex-wrap space-x-4">
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
      >
        <FaYoutube className="text-xl" />
        <span>YouTube</span>
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
      >
        <FaTwitter className="text-xl" />
        <span>Twitter</span>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
      >
        <FaInstagram className="text-xl" />
        <span>Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
      >
        <FaLinkedin className="text-xl" />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
      >
        <FaFacebook className="text-xl" />
        <span>Facebook</span>
      </a>
      <a
        href="https://www.pinterest.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-red-500 flex items-center space-x-2"
      >
        <FaPinterest className="text-xl" />
        <span>Pinterest</span>
      </a>
    </div>
        </div>
        <div className="mt-8 flex items-center jutify-center w-full mx-auto">
          
          <h3 className="font-bold text-xl mb-4">SUBSCRIBE NEWSLETTER</h3>
          <form className="flex flex-wrap space-x-2 mx-auto">
            {/* <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 text-black w-full md:w-80 rounded-md mb-4 sm:mb-0"
            /> */}
            {/* <button className="bg-red-600 text-white px-6 py-2 rounded-md mt-2 sm:mt-0">
              Submit
            </button> */}
          </form>
          <div className="mx-auto">
          <img src="https://benefitzintl.com/wp-content/uploads/2024/01/benifitslogo.png"  className="object-cover w-60 h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
