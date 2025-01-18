import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    id: 'plan_xyz', 
    title: 'Starter',
    price: 'Free',
    description: 'Free Sign Up',
    features: [
      '50 Image generations',
      '500 Credits',
      'Monthly 100 Credits Free',
      'Customer Support',
      'Dedicated Server',
      'Priority Generations',
      '50GB Cloud Storage',
    ],
    isPopular: false,
  },
  {
    id: 'plan_abc', 
    title: 'Business',
    price: '$45.00/Mon',
    description: '7-Day Free Trial',
    features: [
      '600 Image generations',
      'Unlimited Credits',
      'Custom Branding',
      '24/7 Support',
      '500GB Cloud Storage',
      'Dedicated Account Manager',
    ],
    isPopular: true,
  },
  {
    id: 'plan_xyz', 
    title: 'Starter',
    price: 'Free',
    description: 'Free Sign Up',
    features: [
      '50 Image generations',
      '500 Credits',
      'Monthly 100 Credits Free',
      'Customer Support',
      'Dedicated Server',
      'Priority Generations',
      '50GB Cloud Storage',
    ],
    isPopular: false,
  },
  
];

const Subscribe = () => {
  const handleSubscribe = async (planId) => {
    try {
          const response = await fetch('http://localhost:3003/api/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId, userId: 'user123' }),
      });

      const subscription = await response.json();

     
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay Key ID
        subscription_id: subscription.id, // Use the subscription ID from the backend
        name: 'Your App Name',
        description: `Subscription for ${planId}`,
        handler: (response) => {
          console.log('Payment successful:', response);
          alert('Payment successful! Thank you for subscribing.');
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Subscription failed:', error);
      alert('Failed to start subscription. Please try again.');
    }
  };

  return (
    <div className="relative font-sans before:absolute before:w-full before:h-1/2 before:bg-gradient-to-r before:from-gray-700 before:via-purple-700 before:to-gray-700">
      <div className="max-w-6xl mx-auto py-10 px-4 relative z-20">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Choose a Subscription
          </h2>
          <p className="text-sm text-white">Choose a plan tailored to your needs</p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-8 mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded shadow-lg p-6 ${
                plan.isPopular ? 'lg:scale-105' : 'lg:scale-95'
              } transition-transform`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg text-gray-800 font-bold border-b-2 border-red-600 pb-1">
                  {plan.title}
                </h3>
                <div className="text-right">
                  <h3 className="text-lg text-gray-800 font-bold">{plan.price}</h3>
                  <p className="text-xs text-gray-500 mt-1">{plan.description}</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-base text-gray-800 font-bold mb-4">Plan Includes</h4>
                <ul className="space-y-4 text-gray-500">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 mr-3 p-[3px] bg-green-500 rounded-full fill-white"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

            <Link to={`/regester`}>
            <button
                  type="button"
                  // onClick={() => handleSubscribe(plan.id)}
                  className="w-full mt-8 px-4 py-2 text-sm text-gray-800 rounded border border-gray-600 hover:border-green-600  bg-transparent hover:bg-green-500 hover:text-white transition-all"
                >
                  Get Started
                </button>
            </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
