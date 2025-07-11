import React from 'react';

const Pricing = () => {
  return (
    <div className="relative bg-gray-100 p-4 sm:p-6 lg:p-8 font-inter">
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md flex items-center justify-center z-30">
        <div className="bg-white bg-opacity-50 border border-gray-200 border-opacity-60 rounded-xl p-8 shadow-lg text-gray-800 text-3xl font-bold text-center">
          Pricing Coming Soon
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg shadow-xl overflow-hidden">

        {/* Basic Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic</h2>
          <p className="text-5xl font-bold text-gray-900 mb-4">$99</p>
          <p className="text-gray-600 mb-6">Best for small business owners, startups who needs landing page for their business.</p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300 shadow-lg">Get Started</button>
          <div className="mt-8 text-left w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>130+ Coded Blocks</li>
              <li>Best for Developers, Freelancers</li>
              <li>Made with TailwindCSS</li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center text-white relative overflow-hidden group
          hover:shadow-[0_0_30px_5px_rgba(139,92,246,0.7),_0_0_30px_5px_rgba(59,130,246,0.7),_0_0_30px_5px_rgba(16,185,129,0.7)]
          transition-all duration-300">
          {/* Gradient overlay for premium */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 opacity-20 rounded-lg"></div>
          <h2 className="text-2xl font-semibold mb-2">Premium</h2>
          <p className="text-5xl font-bold mb-4">$199</p>
          <p className="mb-6 text-gray-300">Best for medium business owners, startups who needs landing page for their business.</p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300 shadow-lg">Get Started</button>
          <div className="mt-8 text-left w-full">
            <h3 className="text-lg font-semibold mb-3">What's included:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>130+ Coded Blocks</li>
              <li>Best for Developers, Freelancers</li>
              <li>Made with TailwindCSS</li>
              <li>Premium Support</li>
              <li>Future Updates</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Enterprise</h2>
          <p className="text-5xl font-bold text-gray-900 mb-4">$399</p>
          <p className="text-gray-600 mb-6">Best for large companies, business owners who needs landing page for their business.</p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300 shadow-lg">Get Started</button>
          <div className="mt-8 text-left w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>130+ Coded Blocks</li>
              <li>Best for Developers, Freelancers</li>
              <li>Made with TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
