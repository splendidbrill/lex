"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Steps from "./Steps";
import Features from "./Features";
import { FAQ } from "./FAQ";



export const Hero2 = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        <div
          id="hero"
          className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent"
        >
          <div
            id="hero-container"
            className="max-w-4xl mx-auto px-6 pt-6 pb-16 flex flex-col sm:items-center sm:text-center sm:pt-12 sm:max-w-2xl"
          >
            <div
              id="version-text"
              className="flex items-center my-6 gap-2 border border-yellow-300 
                bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
              <p className="font-display font-medium text-yellow-600">
                v0.21.1:{" "}
                <span className="text-yellow-800">Find-in-page bug fixes</span>
              </p>
              <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
            </div>
            <div id="hero-features" className="hidden sm:flex gap-8 my-6">
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <i className="fa-regular fa-file-code text-sm"></i>
                <p>Code Optional</p>
              </div>
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <i className="fa-solid fa-hand-back-fist"></i>
                <p>Drag & drop builder</p>
              </div>
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <i className="fa-solid fa-laptop"></i>
                <p>Windows, Mac, Linux</p>
              </div>
            </div>
            <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl">
              Web app to desktop app in minutes
            </h1>
            <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
              Take your web app codebase and transform it into a cross platform
              desktop app with native functionality.
            </p>
            <div
              id="buttons-container"
              className="mt-12 flex gap-4 flex-col sm:flex-row"
            >
              <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-800 shadow-sm hover:bg-opacity-90">
                Download now
              </button>
              <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
                Read Docs
              </button>
            </div>
          </div>
        </div>
        <Steps />
        <Features />
        <FAQ />
      </main>
    </div>
  );
};
