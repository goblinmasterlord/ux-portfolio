import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const MinimalHero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-16"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 w-full max-w-[1200px] mx-auto"
        style={{ opacity, y }}
      >
        <div className="space-y-8">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200/50 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-green-700">Available for new projects</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="font-display">
              <span className="block text-gray-900">Hey, I'm Marci</span>
              <span className="block mt-2 text-gray-500">
                I make digital products people{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-gray-900">love</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-red-200 via-pink-200 to-purple-200 -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ originX: 0 }}
                  />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            With <span className="font-semibold text-gray-900">6+ years of experience</span>, 
            I help companies build products that are{' '}
            <span className="font-semibold text-gray-900">simple to use</span> and 
            a <span className="font-semibold text-gray-900">joy to interact with</span>. 
            Let's create something amazing together.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('work')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              <span className="font-medium">Check out my work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('hobby-projects')}
              className="inline-flex items-center justify-center px-6 py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              See my hobby projects
            </button>
          </motion.div>
        </div>

        {/* Floating visual element */}
        <motion.div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 hidden xl:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="relative w-full h-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-900/10">UX</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full mt-1"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MinimalHero;