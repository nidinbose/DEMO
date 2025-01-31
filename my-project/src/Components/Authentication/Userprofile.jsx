import React from "react";
import { FaUserCircle, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <FaUserCircle className="text-blue-500 text-6xl mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">John Doe</h2>
        <p className="text-gray-600">User</p>
        <div className="mt-6 space-y-3 text-left">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <p className="text-gray-700">john.doe@example.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-500" />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>
        </div>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 mx-auto">
          <FaEdit /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;