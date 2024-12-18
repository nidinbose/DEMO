import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

const CountryDetails = ({ countryId }) => {
  const [countryDetails, setCountryDetails] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    visatype: '',
    country: '',
    countryCode: '+91',
    phone: '',
    email: '',
    terms: false,
  });

  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`http://localhost:3003/api/getdata/${countryId}`);
        setCountryDetails(response.data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (countryId) {
      fetchCountryDetails();
    }
  }, [countryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

        if (!formData.name || !formData.visatype || !formData.country || !formData.phone || !formData.email) {
      alert('Please fill out all fields.');
      return;
    }

    if (!formData.terms) {
      alert('You must accept the terms and conditions.');
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then((response) => {
        console.log('Form submitted successfully:', response);
        alert('Your form has been submitted!');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form.');
      });
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>  
      ) : (
        <div className="container max-w-full bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-12 border">
          <div className="relative">
            <img
              src={countryDetails.bannerImage || 'https://www.y-axis.com/assets/cms/2024-12/Visa-page-banner.webp'}
              alt="Visa Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-black bg-opacity-70 flex items-center justify-center"></div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12 border">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Apply for a Visa
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 p-7">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">I am</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full sm:w-60 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
                />
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">looking for</label>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">Visa Type</label>
                <select
                  name="visatype"
                  value={formData.visatype}
                  onChange={handleChange}
                  className="w-full sm:w-60 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
                >
                  <option value="" disabled>
                    Choose visa type
                  </option>
                  <option value="tourist">Tourist Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="study">Study Visa</option>
                  <option value="work">Work Visa</option>
                  <option value="immigration">Immigration Visa</option>
                </select>
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">Visa For</label>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">Select country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full sm:w-60 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="india">India</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">Contact me at</label>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full sm:w-24 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2 px-4"
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+81">+81 (Japan)</option>
                  <option value="+49">+49 (Germany)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+86">+86 (China)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full sm:w-48 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <label className="block text-gray-700 font-medium text-sm sm:text-md w-full sm:w-36">My email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email id"
                  className="w-full sm:w-60 text-gray-800 underline placeholder-gray-500 focus:outline-none focus:ring-0 border-none bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2 px-4"
                />
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  id="terms"
                  className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="terms" className="text-gray-600 text-sm">
                  Accept terms and conditions
                </label>
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold py-3 px-8 border border-red-500 hover:bg-red-600 hover:text-white transition duration-300 w-full mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      
      
      <div className="p-6 mt-12">
        <h1 className="text-3xl font-semibold">{countryDetails.Country}</h1>
        <p className="mt-4">{countryDetails.description || 'Details about the country.'}</p>
        <img src={countryDetails.photo} alt="" />
      </div>
    </div>
  );
};

export default CountryDetails;
