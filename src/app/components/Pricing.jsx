// import React from 'react';

// const Pricing = () => {
//   return (
//     <div className="relative bg-gray-100 p-4 sm:p-6 lg:p-8 font-inter">
//       <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md flex items-center justify-center z-30">
//         <div className="bg-white bg-opacity-50 border border-gray-200 border-opacity-60 rounded-xl p-8 shadow-lg text-gray-800 text-3xl font-bold text-center">
//           Pricing Coming Soon
//         </div>
//       </div>
//       <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg shadow-xl overflow-hidden">

//         {/* Basic Plan */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic</h2>
//           <p className="text-5xl font-bold text-gray-900 mb-4">$99</p>
//           <p className="text-gray-600 mb-6">Best for small business owners, startups who needs landing page for their business.</p>
//           <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300 shadow-lg">Get Started</button>
//           <div className="mt-8 text-left w-full">
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
//             <ul className="text-gray-600 space-y-2">
//               <li>130+ Coded Blocks</li>
//               <li>Best for Developers, Freelancers</li>
//               <li>Made with TailwindCSS</li>
//             </ul>
//           </div>
//         </div>

//         {/* Premium Plan */}
//         <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center text-white relative overflow-hidden group
//           hover:shadow-[0_0_30px_5px_rgba(139,92,246,0.7),_0_0_30px_5px_rgba(59,130,246,0.7),_0_0_30px_5px_rgba(16,185,129,0.7)]
//           transition-all duration-300">
//           {/* Gradient overlay for premium */}
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-green-400 opacity-20 rounded-lg"></div>
//           <h2 className="text-2xl font-semibold mb-2">Premium</h2>
//           <p className="text-5xl font-bold mb-4">$199</p>
//           <p className="mb-6 text-gray-300">Best for medium business owners, startups who needs landing page for their business.</p>
//           <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-300 shadow-lg">Get Started</button>
//           <div className="mt-8 text-left w-full">
//             <h3 className="text-lg font-semibold mb-3">What's included:</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li>130+ Coded Blocks</li>
//               <li>Best for Developers, Freelancers</li>
//               <li>Made with TailwindCSS</li>
//               <li>Premium Support</li>
//               <li>Future Updates</li>
//             </ul>
//           </div>
//         </div>

//         {/* Enterprise Plan */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center group hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Enterprise</h2>
//           <p className="text-5xl font-bold text-gray-900 mb-4">$399</p>
//           <p className="text-gray-600 mb-6">Best for large companies, business owners who needs landing page for their business.</p>
//           <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300 shadow-lg">Get Started</button>
//           <div className="mt-8 text-left w-full">
//             <h3 className="text-lg font-semibold text-gray-800 mb-3">What's included:</h3>
//             <ul className="text-gray-600 space-y-2">
//               <li>130+ Coded Blocks</li>
//               <li>Best for Developers, Freelancers</li>
//               <li>Made with TailwindCSS</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// import React from 'react';

// const PricingSection = () => {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//             Choose Your Plan
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Select the perfect plan for your needs. More details coming soon.
//           </p>
//         </div>

//         {/* Pricing Cards Container */}
//         <div className="relative">
//           {/* Pricing Cards Grid */}
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {/* Basic Plan */}
//             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 p-8 relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basic</h3>
//                 <div className="flex items-baseline">
//                   <span className="text-4xl font-bold text-gray-900 dark:text-white">$9</span>
//                   <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
//                 </div>
//               </div>

//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Up to 5 projects</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Basic analytics</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Email support</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">1GB storage</span>
//                 </li>
//               </ul>

//               <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
//                 Get Started
//               </button>
//             </div>

//             {/* Pro Plan (Featured) */}
//             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-purple-500 p-8 relative overflow-hidden transform scale-105">
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              
//               {/* Popular Badge */}
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
//                   Most Popular
//                 </span>
//               </div>

//               <div className="mb-8 mt-4">
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro</h3>
//                 <div className="flex items-baseline">
//                   <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
//                   <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
//                 </div>
//               </div>

//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Unlimited projects</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Advanced analytics</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Priority support</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">50GB storage</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">API access</span>
//                 </li>
//               </ul>

//               <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]">
//                 Get Started
//               </button>
//             </div>

//             {/* Enterprise Plan */}
//             <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 p-8 relative overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
              
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
//                 <div className="flex items-baseline">
//                   <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
//                   <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
//                 </div>
//               </div>

//               <ul className="space-y-4 mb-8">
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Everything in Pro</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Dedicated support</span>
//                 </li>
//                 <li className="flex items-center">
//                   <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span className="text-gray-600 dark:text-gray-300">Unlimited storage</span>
//                 </li>
//               </ul>

//               <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-[1.02]">
//                 Contact Sales
//               </button>
//             </div>
//           </div>

//           {/* Glass Overlay */}
//           <div className="absolute inset-0 z-10 flex items-center justify-center">
//             {/* Backdrop blur overlay */}
//             <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl"></div>
            
//             {/* Coming Soon Content */}
//             <div className="relative z-20 text-center p-8">
//               {/* Animated pulse ring */}
//               <div className="relative inline-flex items-center justify-center mb-6">
//                 <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
//                 <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-ping opacity-30"></div>
//                 <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                 </div>
//               </div>

//               <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//                 Coming Soon
//               </h3>
//               <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto mb-6">
//                 We're putting the finishing touches on our pricing plans. Stay tuned for amazing features at competitive prices!
//               </p>
              
//               {/* Notify button */}
//               <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
//                 <span className="flex items-center">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5c-1.076-1.026-2.865-2.03-5-2.03S7.076 20.974 6 22l-5-5h5V7a5 5 0 0110 0v10z"></path>
//                   </svg>
//                   Notify Me
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <p className="text-gray-600 dark:text-gray-400 mb-4">
//             Have questions about our upcoming pricing?
//           </p>
//           <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
//             Contact our sales team
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
import React from 'react';
import WaitlistDrawer from './WaitlistDrawer'; 
import Link from 'next/link';// Adjust the import path as needed

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select the perfect plan for your needs. More details coming soon.
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative">
          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basic</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$9</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Up to 5 projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Email support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">1GB storage</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
                Get Started
              </button>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-purple-500 p-8 relative overflow-hidden transform scale-105">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>

              <div className="mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">50GB storage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">API access</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02]">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600"></div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Unlimited storage</span>
                </li>
              </ul>

              <button className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-[1.02]">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Glass Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {/* Backdrop blur overlay */}
            <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl"></div>
            
            {/* Coming Soon Content */}
            <div className="relative z-20 text-center p-8">
              {/* Animated pulse ring */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-ping opacity-30"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Coming Soon
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto mb-6">
                We're putting the finishing touches on our pricing plans. Stay tuned for amazing features at competitive prices!
              </p>
              
              {/* Notify button with WaitlistDrawer */}
              <WaitlistDrawer>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5c-1.076-1.026-2.865-2.03-5-2.03S7.076 20.974 6 22l-5-5h5V7a5 5 0 0110 0v10z"></path>
                    </svg>
                    Notify Me
                  </span>
                </button>
              </WaitlistDrawer>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Have questions about our upcoming pricing?
          </p>
          <Link href="/contact">
          <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Contact our  team
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
