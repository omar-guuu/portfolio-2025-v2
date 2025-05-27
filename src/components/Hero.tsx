'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}      className="min-h-screen flex flex-col justify-center items-center text-center pt-32"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 relative"
      >        <div className="relative w-64 h-64 mb-8 mx-auto">
          <Image
            src="/images/omar-profile.jpg"
            alt="Omar Gutierrez"
            fill
            className="rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
            sizes="(max-width: 768px) 256px, 256px"
            priority
            quality={95}
            style={{ objectPosition: '50% 30%' }}
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I&apos;m a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Full Stack Developer
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          And my name is Omar Gutierrez. I&apos;m a software engineer from México with 5+ years
          of experience creating excellent and appealing software solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >
        <a
          href="/files/CV2021ENG_C.pdf"
          className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          download
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download CV
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto"
      >
        {/* We'll add your tech stack icons here */}
        {/* You can add them as SVGs or images later */}
      </motion.div>
    </motion.section>
  );
}
