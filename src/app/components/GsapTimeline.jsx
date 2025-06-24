"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GsapTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const points = gsap.utils.toArray(".timeline-point");
    gsap.set(points, { opacity: 0, y: 50 });
    gsap.to(points, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      ease: "power3.out",
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={timelineRef} className="w-full max-w-2xl mx-auto py-24">
      <div className="flex flex-col gap-12 relative">
        <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 -translate-x-1/2 z-0" />
        <div className="timeline-point relative z-10 flex items-center gap-6">
          <div className="h-8 w-8 rounded-full bg-blue-500 border-4 border-white shadow-lg" />
          <div>
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">Point One</h4>
            <p className="text-gray-600 dark:text-gray-300">This is the first step of the timeline, introducing the journey.</p>
          </div>
        </div>
        <div className="timeline-point relative z-10 flex items-center gap-6">
          <div className="h-8 w-8 rounded-full bg-purple-500 border-4 border-white shadow-lg" />
          <div>
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">Point Two</h4>
            <p className="text-gray-600 dark:text-gray-300">The second milestone brings new features and improvements.</p>
          </div>
        </div>
        <div className="timeline-point relative z-10 flex items-center gap-6">
          <div className="h-8 w-8 rounded-full bg-pink-500 border-4 border-white shadow-lg" />
          <div>
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">Point Three</h4>
            <p className="text-gray-600 dark:text-gray-300">Here we highlight the third key achievement in the process.</p>
          </div>
        </div>
        <div className="timeline-point relative z-10 flex items-center gap-6">
          <div className="h-8 w-8 rounded-full bg-green-500 border-4 border-white shadow-lg" />
          <div>
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">Point Four</h4>
            <p className="text-gray-600 dark:text-gray-300">The final point marks the successful completion of the timeline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}