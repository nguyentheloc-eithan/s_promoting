'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // Set window size on client-side
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Early return if window size is not available yet
  if (!windowSize) return null;

  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      {/* Animated background particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-blue-400/30"
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
          }}
          initial={{
            x: Math.random() * windowSize.width,
            y: Math.random() * windowSize.height,
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Main content container */}
      <div className="relative flex min-h-screen items-center justify-center px-4 md:px-8">
        <div className="relative z-10 w-full max-w-6xl">
          {/* Left side content */}
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div className="text-center md:text-left space-y-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}>
                <span className="text-blue-600 dark:text-blue-400 text-lg md:text-xl font-medium">
                  Hello, I am
                </span>
                <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Nguyen The Loc
                </h1>
                <span className="block text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  (Eithan)
                </span>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Software Engineer & Web-App Developer
              </motion.p>

              <motion.div
                className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right side decorative element */}
            <motion.div
              className="relative hidden md:block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}>
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse delay-100" />
                <div className="relative w-full h-full rounded-full border-4 border-blue-500 flex items-center justify-center">
                  <span className="text-5xl lg:text-6xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="lg:block hidden absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                Scroll to explore
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-blue-600 rounded-full p-1"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}>
                <div className="w-full h-3 bg-blue-600 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
