import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    referredBy: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3003/api/regester", formData);
      toast.success(`Registration successful! Your referral code is ${response.data.referralCode}`);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <ToastContainer />
      <div className="container mx-auto p-7">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4 bg-gray-50 h-full">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="max-w-[80%] w-full h-full aspect-square object-contain block mx-auto"
              alt="login-image"
            />
          </div>
          <div className="flex items-center p-6 h-full w-full">
            <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-teal-500 text-2xl font-bold max-md:text-center">Create an account</h3>
              </div>
              <div>
                <label className="text-gray-800 text-xs block mb-2">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 py-3 outline-none"
                  placeholder="Enter name"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 py-3 outline-none"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 py-3 outline-none"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Confirm Password</label>
                <input
                  name="cpassword"
                  type="password"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 py-3 outline-none"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Referral Code (Optional)</label>
                <input
                  name="referredBy"
                  type="text"
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 pl-2 py-3 outline-none"
                  placeholder="Referral Code"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mt-6">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded"
                  required
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-800">
                  I accept the{" "}
                  <a href="#" className="text-teal-500 font-semibold hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-sm tracking-wider rounded bg-teal-600 hover:bg-green-500 text-white focus:outline-none"
                >
                  Create an account
                </button>
                <p className="text-sm mt-6 text-gray-800">
                  Already have an account?{" "}
                  <a href="/login" className="text-teal-500 font-semibold hover:underline">
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
