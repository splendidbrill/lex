"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Steps = () => {
  const steps = [
    {
      id: "step1",
      badge: "Mentor",
      title: "Lex as a mentor",
      description: "Lex helps guide your entrepreneurial journey.",
      image: "/assets/lex-step2.png",
      imageWidth: 500,
      imageHeight: 300,
      features: [
        "Fills the gaps in your knowledge before you know something is missing",
        "Facilitates learning and progress tracking (coming soon)",
        "Simplifies complex tasks"
      ]
    },
    {
      id: "step2",
      badge: "Command Center",
      title: "AI enhanced command centre",
      description: "All your business needs in one place.",
      image: "/assets/lex-step3.png",
      imageWidth: 250,
      imageHeight: 170,
      features: [
        "Connect and organize your AI agent workflows",
        "Integration with business applications (coming soon)",
        "Control all agents from one chat (coming soon)"
      ]
    },
    {
      id: "step3",
      badge: "Cofounder",
      title: "Lex as your cofounder",
      description: "Helps you progress at any stage.",
      image: "/assets/lex-step1.png",
      imageWidth: 400,
      imageHeight: 300,
      features: [
        "Develop strategies",
        "Trend identification",
        "And much more"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      id="steps" 
      className="relative py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-br from-slate-50/50 via-blue-50/30 to-purple-50/20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three powerful ways Lex transforms your business journey
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants}
              className={`group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className={`flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Content Side */}
                <div className={`flex flex-col gap-6 lg:w-1/2 ${
                  index % 2 === 1 ? 'lg:pl-12' : 'lg:pr-12'
                }`}>
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit shadow-lg"
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    {step.badge}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-start gap-4 group/feature"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform duration-200">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className={`lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0 ${
                    index % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                >
                  <div className="relative group/image">
                    {/* Image container with hover effects */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-xl group-hover/image:shadow-2xl transition-all duration-500 group-hover/image:scale-105">
                      <Image 
                        src={step.image} 
                        alt={step.title}
                        width={step.imageWidth} 
                        height={step.imageHeight}
                        className="w-full h-auto object-contain transform group-hover/image:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    </div>

                    {/* Floating decoration */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to experience the power of AI-enhanced business building?
          </p>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-medium">Get started with Lex today</span>
            <svg className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
