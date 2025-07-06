"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import Navbar from "./Navbar";
import Steps from "./Steps";
import Features from "./Features";
import { FAQ } from "./FAQ";

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import WaitlistDrawer from "./WaitlistDrawer";

export const Hero2 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
      () => ["amazing", "new", "wonderful", "beautiful", "smart"],
      []
    );
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (titleNumber === titles.length - 1) {
          setTitleNumber(0);
        } else {
          setTitleNumber(titleNumber + 1);
        }
      }, 2000);
      return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);
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
            {/* <div
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
            </div> */}
            <div id="hero-features" className="hidden sm:flex gap-8 my-6">
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <i className="fa-regular fa-file-code text-sm"></i>
                <p>📘 Learn</p>
              </div>
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <i className="fa-solid fa-hand-back-fist"></i>
                <p>🛠️ Build</p>
              </div>
              <div className="flex justify-center gap-2 items-center text-gray-500">
                <i className="fa-solid fa-laptop"></i>
                <p>🏆 Succeed</p>
              </div>
            </div>
            <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-6xl text-center">
              Lex Bot
              <br />
              {/* Build Businesses in Mintues */}
            </h1>
            {/* <div className="text-4xl font-bold text-center mt-4">
              Build Businesses in{" "}
              <span className="relative inline-block mr-2 text-red-500">
                <span className="relative z-10">Months</span>
                <span className="absolute left-0 top-1/2 w-full h-[3px] bg-red-500 transform -translate-y-1/2 z-0"></span>
              </span>
              Minutes
            </div> */}
            <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Build Businesses in</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p> */}
          </div>

            <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
              Your AI enhanced command center, cofounder and mentor.
            </p>
            <div
              id="buttons-container"
              className="mt-12 flex gap-4 flex-col sm:flex-row"
            >
              {/* <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-800 shadow-sm hover:bg-opacity-90">
                Join Waitlist
              </button> */}
              <WaitlistDrawer/>
              {/* <Drawer>
                <DrawerTrigger asChild>
                  <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-800 shadow-sm hover:bg-opacity-90">
                    Join Waitlist
                  </button>
                </DrawerTrigger>
                <DrawerContent className="h-[50vh]">
                  <div className="w-full h-full flex flex-col justify-center items-center px-4">
                    <DrawerHeader className="text-center">
                      <DrawerTitle>Join the Waitlist</DrawerTitle>
                      <DrawerDescription>
                        Submit your email to get early access.
                      </DrawerDescription>
                    </DrawerHeader>

                    <form className="w-full flex flex-col gap-4 items-center mt-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full max-w-sm md:max-w-xs border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
                      />
                      <div className="flex flex-col gap-2 w-full max-w-sm md:max-w-xs">
                        <button
                          type="submit"
                          className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-950 transition"
                        >
                          Submit
                        </button>
                        <DrawerClose asChild>
                          <button className="border border-gray-400 px-4 py-2 rounded-lg">
                            Cancel
                          </button>
                        </DrawerClose>
                      </div>
                    </form>
                  </div>
                </DrawerContent>
              </Drawer> */}

              <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">
                Read About Us
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
