"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Rocket, ShieldCheck, Palette, DollarSign } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

export const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const data: TimelineEntry[] = [
    {
      title: "Fast Development",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            With vast software engineering experience, we ship your solution on time.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Average delivery time: 30% faster than industry standard
            </p>
          </div>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-purple-600" />,
    },
    {
      title: "Quality Assurance",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            Our internal and external testers ensure quality and reliability through comprehensive testing protocols.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              99.9% uptime guarantee with 24/7 monitoring
            </p>
          </div>
        </div>
      ),
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Classic Designs",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            We craft visually appealing and user-friendly solutions that stand the test of time.
          </p>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-l-4 border-pink-500">
            <p className="text-sm text-pink-700 dark:text-pink-300">
              Award-winning designs with focus on user experience
            </p>
          </div>
        </div>
      ),
      icon: <Palette className="h-5 w-5 text-pink-600" />,
    },
    {
      title: "Reduced Costs",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            We help you gain strategic advantage with cost-effective solutions without compromising quality.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-sm text-green-700 dark:text-green-300">
              Average cost savings: 40% compared to traditional agencies
            </p>
          </div>
        </div>
      ),
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
    },
  ];

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 20%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950" ref={containerRef}>
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="mt-6 text-neutral-600 dark:text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We specialize in software development, hosting, and SEO. We've helped bring ideas to life 
            with sustainable business practices across industries.
          </p>
          <motion.button 
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-32 px-4 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-16 md:pt-24 gap-6 md:gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icon and Title Section */}
            <div className="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Icon */}
              <div className="relative">
                <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-700 relative z-10">
                  {item.icon}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 h-12 w-12 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 opacity-20 blur-md"></div>
              </div>

              {/* Title */}
              <h3 className="hidden md:block text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 md:ml-8 leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="relative w-full max-w-2xl">
              {/* Mobile title */}
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              
              {/* Content with enhanced styling */}
              <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                {item.content}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Enhanced Vertical Animated Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-6 md:left-10 lg:left-14 top-0 overflow-hidden w-[3px] 
            bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent 
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-purple-500 via-blue-500 to-purple-600 rounded-full"
          />
          
          {/* Additional glow effect for the line */}
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[6px] -ml-[1.5px] bg-gradient-to-b from-purple-400/30 via-blue-400/30 to-purple-500/30 blur-sm rounded-full"
          />
        </div>
      </div>
    </div>
  );
};