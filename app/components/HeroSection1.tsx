"use client";

import { motion } from "motion/react";
import { cn } from "../lib/utils";

export function HeroSection1() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      {/* <Navbar /> */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-70 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-90 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-5xl font-bold text-gray-950 md:text-6xl lg:text-6xl">
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
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-800"
        >
          Custom software solutions engineered for performance, security, and scalability. Trusted by businesses worldwide.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
            <a
            href="/contact"
            className="w-40 transform rounded-lg bg-[#0D9488] hover:bg-[#0D9488]/90 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center"
            >
            Get Started
            </a>
            <a
            href="/projects"
            className="w-40 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 flex items-center justify-center"
            >
            View Projects
            </a>
        </motion.div>
        
        {/* Image Section - Responsive: simple image on small screens, dotted background on larger screens */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
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
              {/* Dotted Background */}
              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#d1d5db_1.5px,transparent_1.5px)]",
                )}
              />
              {/* Reduced radial gradient overlay for subtle faded look */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white/20 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
              
              {/* Centered Image */}
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