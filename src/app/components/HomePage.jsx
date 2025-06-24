"use client"
import React, { useState, useEffect } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className={`min-h-screen flex flex-col items-center justify-start transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950' : 'bg-gradient-to-br from-white via-blue-50 to-purple-100'}`}>
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-3 bg-white/60 shadow-sm sticky top-0 z-20 border-b border-gray-100 backdrop-blur-md backdrop-saturate-150 dark:bg-white/10 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <img src="/vercel.svg" alt="Logo" className="h-7 w-7" />
          <span className="font-bold text-2xl text-gray-800 tracking-tight dark:text-white">LexBlend</span>
        </div>
        <nav className="flex gap-2 md:gap-4 lg:gap-6 items-center text-gray-700 font-medium dark:text-gray-200">
          <a href="#" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Product</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Solutions</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Pricing</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Enterprise</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Resources</a>
        </nav>
        <div className="flex gap-2 items-center">
          <button
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 19.07l-.71.71m16.97-16.97l-.71.71M4.05 4.93l-.71-.71M21 12h1M3 12H2m16.24 7.07A9 9 0 116.93 6.93a7 7 0 1010.31 10.31z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
          <a href="#" className="px-4 py-2 rounded-lg text-blue-600 font-semibold hover:bg-blue-50 transition dark:text-blue-400 dark:hover:bg-blue-900/40">Sign in</a>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow dark:bg-blue-500 dark:hover:bg-blue-600">Get Started</button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24 mb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 dark:bg-gradient-to-r dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 dark:text-transparent">Unite Your Workflow.<br />Empower Your Team.</h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-8 dark:text-gray-300">A modern platform blending seamless authentication and powerful productivity tools. Inspired by the best of Clerk and ClickUp, designed for teams who want more.</p>
        <div className="flex gap-4">
          <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">Start for Free</button>
          <button className="px-8 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold text-lg hover:bg-blue-50 transition dark:border-blue-400 dark:text-blue-300 dark:hover:bg-gray-900/40">Book a Demo</button>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="w-full max-w-5xl grid md:grid-cols-3 gap-8 px-4 mb-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center dark:bg-gray-800 dark:text-gray-100">
          <img src="/globe.svg" alt="Global" className="h-12 mb-4" />
          <h3 className="font-bold text-xl mb-2">Effortless Auth</h3>
          <p className="text-gray-500 text-center dark:text-gray-300">Secure, customizable authentication flows out of the box. Integrate in minutes, scale with confidence.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center dark:bg-gray-800 dark:text-gray-100">
          <img src="/window.svg" alt="Productivity" className="h-12 mb-4" />
          <h3 className="font-bold text-xl mb-2">Productivity Hub</h3>
          <p className="text-gray-500 text-center dark:text-gray-300">Organize tasks, docs, and goals in one place. Collaborate with your team in real time.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center dark:bg-gray-800 dark:text-gray-100">
          <img src="/next.svg" alt="Next Gen" className="h-12 mb-4" />
          <h3 className="font-bold text-xl mb-2">Next-Gen Design</h3>
          <p className="text-gray-500 text-center dark:text-gray-300">A beautiful, responsive interface that feels fast and familiar, inspired by the best SaaS experiences.</p>
        </div>
      </section>
      {/* Call to Action */}
      <section className="w-full flex flex-col items-center mb-24 px-4">
        <div className="bg-gradient-to-r from-blue-600 to-purple-500 rounded-2xl p-10 shadow-xl flex flex-col items-center w-full max-w-3xl dark:bg-gradient-to-r dark:from-blue-900 dark:to-purple-900">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to supercharge your workflow?</h2>
          <p className="text-white/90 mb-6 text-lg">Join thousands of teams using LexBlend to move faster and smarter.</p>
          <button className="px-8 py-3 rounded-lg bg-white text-blue-700 font-semibold text-lg shadow hover:bg-blue-50 transition dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-800">Get Started Free</button>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full text-center text-gray-400 py-8 border-t border-gray-100 mt-auto dark:text-gray-500 dark:border-gray-800">
        &copy; {new Date().getFullYear()} LexBlend. Inspired by Clerk & ClickUp. All rights reserved.
      </footer>
    </div>
  );
}