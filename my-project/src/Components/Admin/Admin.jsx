import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaShoppingCart, FaCog } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userId"); 
    localStorage.removeItem("authToken");
    localStorage.removeItem("role"); 

    alert("✅ Successfully logged out!");
    navigate("/adminlogin");
  };
 
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Users</li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Orders</li>
          <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Settings</li>
          <button onClick={handleLogout}><li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">Logot</li></button>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="bg-white shadow p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Admin</h1>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Users Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaUser className="text-blue-500 text-4xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Total Users</h2>
              <p className="text-gray-600 text-lg">1,250</p>
            </div>
          </motion.div>

          {/* Orders Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaShoppingCart className="text-green-500 text-4xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">Orders</h2>
              <p className="text-gray-600 text-lg">320</p>
            </div>
          </motion.div>

          {/* Settings Card */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaCog className="text-purple-500 text-4xl mr-4" />
            <div>
              <h2 className="text-xl font-bold">System Settings</h2>
              <p className="text-gray-600 text-lg">Manage</p>
            </div>
          </motion.div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recent Users</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">John Doe</td>
                <td className="p-3">john@example.com</td>
                <td className="p-3">User</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Jane Smith</td>
                <td className="p-3">jane@example.com</td>
                <td className="p-3">Admin</td>
              </tr>
              <tr>
                <td className="p-3">Alice Brown</td>
                <td className="p-3">alice@example.com</td>
                <td className="p-3">Moderator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
