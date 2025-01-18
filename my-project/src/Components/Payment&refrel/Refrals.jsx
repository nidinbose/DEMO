import React, { useState, useEffect } from "react";

const Refrals = () => {
  const [userDetails, setUserDetails] = useState({
    name: "Ajith",
    referralCode: "",
    totalReferrals: 12,
    successfulSignups: 8,
  });

  
  useEffect(() => {
  
    const fetchedDetails = {
      name: "Ajith ",
      referralCode: "REF123456",
      totalReferrals: 12,
      successfulSignups: 8,
    };
    setUserDetails(fetchedDetails);
  }, []);

  const referralLink = `https://example.com/register?ref=${userDetails.referralCode}`;

  return (
    <div className="font-sans flex items-center justify-center h-screen border p-6">
      <div className="bg-white border max-w-2xl w-full p-8 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6">
          Refer and Earn Rewards 🎉
        </h2>
        <p className="text-gray-600 mb-8">
          Share your referral link with friends and earn rewards for every
          successful signup!
        </p>


        <div className="bg-indigo-100 p-6 rounded-lg shadow-inner mb-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Welcome, {userDetails.name}
          </h3>
          <p className="text-sm text-gray-500">
            Track your referral stats and share your unique link below.
          </p>
        </div>


        <div className="mb-6">
          <label
            htmlFor="referralCode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Referral Code
          </label>
          <div className="bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg">
            {userDetails.referralCode || "Loading..."}
          </div>
        </div>


        <div className="mb-8">
          <label
            htmlFor="referralLink"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Your Referral Link
          </label>
          <input
            type="text"
            id="referralLink"
            value={referralLink}
            readOnly
            className="w-full bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg"
          />
        </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-blue-700">
              Total Referrals
            </h4>
            <p className="text-2xl font-bold text-gray-800">
              {userDetails.totalReferrals}
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-green-700">
              Successful Signups
            </h4>
            <p className="text-2xl font-bold text-gray-800">
              {userDetails.successfulSignups}
            </p>
          </div>
        </div>

        
        <button
          onClick={() => navigator.clipboard.writeText(referralLink)}
          className="w-full bg-green-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-600 transition shadow-lg"
        >
          Copy Referral Link
        </button>
      </div>
    </div>
  );
};

export default Refrals;
