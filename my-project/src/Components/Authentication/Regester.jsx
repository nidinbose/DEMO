import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    referredBy: '', // Optional
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      alert(`Registration successful! Your referral code is ${response.data.referralCode}`);
    } catch (err) {
      console.error(err);
      alert('Registration failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" onChange={handleChange} type="password" placeholder="Password" required />
      <input name="referredBy" onChange={handleChange} placeholder="Referral Code (Optional)" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
