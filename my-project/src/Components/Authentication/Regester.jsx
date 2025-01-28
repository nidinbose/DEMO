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
    
      const { data: order } = await axios.post("http://localhost:3003/api/createorder", {
        email: formData.email,
        name: formData.name,
      });

    
      const options = {
        key: "your_razorpay_key", 
        amount: order.amount,
        currency: "INR",
        name: "Your App Name",
        description: "Subscription Plan",
        order_id: order.id,
        handler: async function (response) {
         
          const verifyResponse = await axios.post("http://localhost:3003/api/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verifyResponse.data.success) {
          
            const registerResponse = await axios.post("http://localhost:3003/api/register", {
              ...formData,
              subscriptionId: verifyResponse.data.subscriptionId,
            });

            toast.success(`Registration successful! Your referral code is ${registerResponse.data.referralCode}`);
            setTimeout(() => navigate("/login"), 2000);
          } else {
            toast.error("Payment verification failed. Please try again.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during the registration process.");
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <ToastContainer />
      <div className="container mx-auto p-7">
        
      </div>
    </div>
  );
};

export default Register;
