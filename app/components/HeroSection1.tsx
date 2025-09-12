// components/HeroSection1.tsx
"use client";

import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { useLoading } from "../contexts/LoadingContext";

export function HeroSection1() {
  const { navigate } = useLoading();

  return (
    <div className="relative bg-[#111827] mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-white md:text-6xl lg:text-[54px]">
          {"We Build Fast, Scalable Apps"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <div className="relative z-10 mx-auto mt-6 flex justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.8, // After main text animation completes
        ease: "easeOut",
      }}
      className="relative"
    >
      {/* Skewed rhombus background */}
      <div className="absolute inset-0 bg-gray-700 transform skew-x-12 rounded-md"></div>
      
      {/* Text content */}
      <span className="relative z-10 px-6 py-2 text-lg font-semibold text-brand md:text-6xl lg:text-[54px]">
        Trusted Worldwide
      </span>
    </motion.div>
  </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-white"
        >
          Custom software solutions engineered for performance, security, and scalability. Trusted by businesses worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate('/contact')}
            className="w-40 transform rounded-lg bg-gray-950 hover:bg-gray-900 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="w-40 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 flex items-center justify-center"
          >
            View Projects
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="relative z-10 mt-20"
        >
          {/* Mobile: Simple centered image */}
          <div className="block md:hidden px-4">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src="ecommerce.jpg"
                alt="Landing page preview"
                className="aspect-[16/9] h-auto w-full object-cover"
                height={3000}
                width={2000}
              />
            </div>
          </div>

          {/* Desktop: Full Width Dotted Background Container */}
          <div className="hidden md:block -mx-4 md:-mx-8 lg:-mx-12">
            <div className="relative flex min-h-[600px] w-screen items-center justify-center bg-white">
              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d1d5db_1.5px,transparent_1.5px)]",
                )}
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#111827] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
              
              <div className="relative z-20 w-full max-w-5xl px-8">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="ecommerce.jpg"
                    alt="Landing page preview"
                    className="aspect-[16/9] h-auto w-full object-cover"
                    height={3000}
                    width={2000}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}