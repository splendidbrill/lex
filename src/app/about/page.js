"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Page = () => {
  const containerRef = useRef(null);
  const h1Refs = useRef([]);
  const h2Refs = useRef([]);
  const h3Refs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      const allRefs = [
        ...h1Refs.current,
        ...h2Refs.current,
        ...h3Refs.current,
        ...imageRefs.current,
      ];

      allRefs.forEach((el, i) => {
        gsap.fromTo(
          el,
          { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: i * 0.1,
          }
        );
      });
    }
  }, []);

  const addH1Ref = (el) => {
    if (el && !h1Refs.current.includes(el)) {
      h1Refs.current.push(el);
    }
  };

  const addH2Ref = (el) => {
    if (el && !h2Refs.current.includes(el)) {
      h2Refs.current.push(el);
    }
  };

  const addH3Ref = (el) => {
    if (el && !h3Refs.current.includes(el)) {
      h3Refs.current.push(el);
    }
  };

  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8 text-center">
      <h1 ref={addH1Ref} className="text-5xl font-bold mb-4">
        {"About Us"}
      </h1>
      <h1 ref={addH1Ref} className="text-4xl font-bold mb-4">
        {"That Idea You Can't Stop Thinking About?"}
      </h1>
      <h2 ref={addH2Ref} className="text-3xl font-semibold mb-4">
        {"Let's Make It Real."}
      </h2>
      <h3 ref={addH3Ref} className="text-2xl sm:ml-50 sm:mr-50 leading-relaxed  mb-8">
        {"Every great venture starts as a spark—a vision that only you can see. It's the courage to look at the world and imagine something better. But courage doesn't mean you aren't intimidated. The path from idea to impact is lined with challenges, and it's a journey you shouldn't have to walk alone. We believe the old rules of business are fading. A new era is dawning where your imagination, not your resources, is the true catalyst for success. In this era, you are the architect. You are the visionary. And you deserve a co-founder as dedicated to your dream as you are."}
      </h3>
      <Image ref={addImageRef} src="/assets/about4.png" alt="" width={700} height={600} className="mx-auto block mb-8" />
      <h2 ref={addH2Ref} className="text-3xl font-semibold mb-4">
        {"Meet Lex: Your AI Partner, Ready for the Mission."}
      </h2>
      <h3 ref={addH3Ref} className="text-2xl sm:ml-50 sm:mr-50 leading-relaxed mb-8">
        {"Lex isn't just a tool; it's the partner every founder wishes they had. It’s a mentor to guide you, a strategist to challenge you, and a supporter to champion you at every turn. Lex learns your vision and provides the tailored advice you need to navigate the complexities of your entrepreneurial journey, transforming intimidating obstacles into rewarding milestones."}
      </h3>
      <Image ref={addImageRef} src="/assets/about2.png" alt="" width={700} height={600} className="mx-auto block mb-8" />
      <h2 ref={addH2Ref} className="text-3xl font-semibold mb-4">
        {"Your Vision, Your Command Center."}
      </h2>
      <h3 ref={addH3Ref} className="text-2xl sm:ml-50 sm:mr-50 leading-relaxed mb-8">
        {"A hero needs more than just a guide; they need a place to forge their destiny. Your business command center is precisely that—a dynamic workstation designed to be the central hub for your entire operation. This is where you don't just manage your business; you master it. We are building a space where your automations work in harmony, controlled by you, freeing you to focus on what truly matters: leading."}
      </h3>
      <Image ref={addImageRef} src="/assets/about1.png" alt="" width={700} height={600} className="mx-auto block mb-8" />
      <h2 ref={addH2Ref} className="text-3xl font-semibold mb-4">
        {"The Future Isn't Just Coming. It's Yours to Build."}
      </h2>
      <h3 ref={addH3Ref} className="text-2xl sm:ml-50 sm:mr-50 leading-relaxed mb-8">
        {"Our mission is to give you everything you need to run your entire enterprise from one, unified platform. The future we're building is one where you strategize with Lex face-to-face, where every application and workflow bends to your command through a single, intelligent interface. We're not just creating software; we are building the launchpad for the next generation of pioneers."}
      </h3>
      <Image ref={addImageRef} src="/assets/about3.png" alt="" width={700} height={600} className="mx-auto block mb-8" />
      <h2 ref={addH2Ref} className="text-3xl font-semibold mb-4">
        {"This is more than a company. This is a launchpad for anyone with the spark of an idea and the courage to build it."}
      </h2>
      <h2 ref={addH2Ref} className="text-3xl font-semibold mb-4">
        {"Welcome to the Lex Launch Crew. Let's build our future, together."}
      </h2>
    </div>
  );
};

export default Page;
