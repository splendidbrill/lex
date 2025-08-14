"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WaitlistDrawer from './WaitlistDrawer';
import Navbar from './Navbar';
import Steps2 from './Steps2';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';

const Hero4 = ({ hasMounted, titles, titleNumber }) => {
  // Cryptic words that appear with encryption effect
  const crypticWords = [
    "minutes", "a flash",
  ];

  const [mounted, setMounted] = useState(false);
  const [currentCrypticWord, setCurrentCrypticWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCryptic, setShowCryptic] = useState(false);
  const currentWordRef = useRef(0);

  // Encryption characters for the decryption effect
  const encryptChars = "!@#$%^&*()_+-=[]{}|;:,.<>?`~";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Start the encryption effect after 2 seconds
    const startTimeout = setTimeout(() => {
      setShowCryptic(true);
      
      const runCycle = () => {
        const targetWord = crypticWords[currentWordRef.current];
        
        // Encryption phase - show random characters
        let encryptionStep = 0;
        const encryptInterval = setInterval(() => {
          if (encryptionStep < 4) {
            // Show random encrypted characters
            setDisplayText(
              Array.from({ length: targetWord.length }, () => 
                encryptChars[Math.floor(Math.random() * encryptChars.length)]
              ).join('')
            );
            encryptionStep++;
          } else {
            clearInterval(encryptInterval);
            
            // Decryption phase - reveal the actual word character by character
            let decryptStep = 0;
            const decryptInterval = setInterval(() => {
              setDisplayText(
                targetWord.slice(0, decryptStep + 1) + 
                Array.from({ length: targetWord.length - decryptStep - 1 }, () => 
                  encryptChars[Math.floor(Math.random() * encryptChars.length)]
                ).join('')
              );
              
              decryptStep++;
              
              if (decryptStep >= targetWord.length) {
                clearInterval(decryptInterval);
                setDisplayText(targetWord);
                
                // Hold the word for 2 seconds, then move to next word
                setTimeout(() => {
                  const nextIndex = (currentWordRef.current + 1) % crypticWords.length;
                  currentWordRef.current = nextIndex;
                  setCurrentCrypticWord(nextIndex);
                  
                  // Brief pause before next word
                  setTimeout(() => {
                    runCycle();
                  }, 300);
                }, 2000);
              }
            }, 25);
          }
        }, 12);
      };

      runCycle(); // Start the first cycle
    }, 2000);

    return () => clearTimeout(startTimeout);
  }, [mounted]);

  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
    >
      <Navbar />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div
        id="hero-container"
        className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20 flex flex-col items-center text-center min-h-screen justify-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">AI-Powered Business Building</span>
            </div>
            <svg className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </motion.div>

        {/* Process indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden sm:flex gap-8 mb-8"
        >
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-lg">📘</span>
            </div>
            <span className="font-semibold text-gray-700">Learn</span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-lg">🛠️</span>
            </div>
            <span className="font-semibold text-gray-700">Build</span>
          </div>
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-lg">🏆</span>
            </div>
            <span className="font-semibold text-gray-700">Succeed</span>
          </div>
        </motion.div>

        {/* Main heading with minimized spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2" // Further reduced from mb-4 to mb-2
        >
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight max-w-5xl leading-none">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Build Businesses in
            </span>
            
            {/* Main animated titles (Days, Hours, Minutes) */}
            {(hasMounted || mounted) && (
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[60px] md:h-[80px] xl:h-[96px] mt-0"> {/* Reduced from mt-2 to mt-1 */}
                {titles && titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute font-bold ${
                      title === "Months"
                        ? "bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent line-through"
                        : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                    }`}
                    initial={{ opacity: 0, y: "-100" }}
                    animate={
                      titleNumber === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: titleNumber > index ? -150 : 150 }
                    }
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            )}

            {/* Cryptic encrypted words - minimized spacing and no loading text */}
            <motion.div
              className="relative flex w-full justify-center text-center min-h-[35px] md:min-h-[45px] -mt-16" // Made gap 4 times negative
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {showCryptic && displayText && (
                <motion.span
                  className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent font-mono"
                  key={`${currentCrypticWord}-${displayText}`}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {displayText}
                </motion.span>
              )}
            </motion.div>
          </h1>
        </motion.div>

        {/* Subtitle with minimized spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed mb-12 mt-2" // Reduced from mt-4 to mt-2
        >
          Your AI-enhanced mentor, command center, and cofounder.{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            Transform your business ideas into reality faster than ever.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 flex-col sm:flex-row"
        >
          <WaitlistDrawer />

          <Link href="/about">
            <button className="group px-8 py-4 font-semibold rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2 text-gray-700">
                Read About Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 mb-4">Trusted by entrepreneurs worldwide</p>
          <div className="flex items-center gap-8 opacity-60">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg"></div>
          </div>
        </motion.div>

        {/* Floating action hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Steps2 />
      <Features />
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Hero4;
