import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Referrals = ({ referralCode }) => {
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    const fetchReferrals = async () => {
      try {
        const response = await axios.get(`/api/referrals/${referralCode}`);
        setReferrals(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchReferrals();
  }, [referralCode]);

  return (
    <div>
      <h2>Your Referrals</h2>
      <ul>
        {referrals.map((referral) => (
          <li key={referral._id}>{referral.name} ({referral.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default Referrals;
