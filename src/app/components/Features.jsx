"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    gsap.fromTo(
      q(".feature-card"),
      {
        opacity: 0,
        scale: 0.8,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.current,
          start: "top center+=100",
          end: "bottom center",
          scrub: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
  }, []);

  return (
    <div id="bento-grid" className="container py-12 px-4 md:px-16 lg:px-32 mx-auto" ref={el}>
      <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">Features and the Future</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="feature-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:via-purple-50 hover:to-yellow-50 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Message First System</h3>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
          {/* <img src="/assets/asset 37.png" alt="" className="mb-4" width="120" height="48" /> */}
        </div>
        <div className="feature-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:via-purple-50 hover:to-yellow-50 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Control everything that your business needs</h3>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
          {/* <p className="text-lg text-center font-light mb-4">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p> */}
          {/* <img src="/assets/asset 38.png" alt="" width="120" height="48" /> */}
        </div>
        <div className="feature-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:via-purple-50 hover:to-yellow-50 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Anticipate your needs</h3>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
          {/* <img src="/assets/asset 39.png" alt="" width="120" height="48" /> */}
        </div>
        <div className="feature-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:via-purple-50 hover:to-yellow-50 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl texgt-center font-semibold text-gray-800 mb-4">Dynamic AI Agent Workspace</h3>
          <h3 className="text-2xl texgt-center font-semibold text-gray-800 mb-4">Coming Soon</h3>
          {/* <p className="text-lg text-center font-light mb-4">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p> */}
          {/* <img src="/assets/asset 40.png" alt="" width="120" height="48" /> */}
        </div>
        <div className="feature-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:via-purple-50 hover:to-yellow-50 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Business Planning And Strategy</h3>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
          {/* <img src="/assets/asset 37.png" alt="" width="120" height="48" /> */}
        </div>
        <div className="feature-card bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:via-purple-50 hover:to-yellow-50 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">Face time with your Lex Ai Agent</h3>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
          {/* <p className="text-lg text-center font-light mb-4">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p> */}
          {/* <img src="/assets/asset 38.png" alt="" width="120" height="48" /> */}
        </div>
      </div>
    </div>
  );
};

export default Features;