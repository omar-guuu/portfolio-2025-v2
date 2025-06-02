'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-40"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 relative"
      >
        <div className="relative w-64 h-64 mb-8 mx-auto">
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
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" style={{ marginRight: '10px', marginLeft: '10px' }}>          My name is Omar Gutierrez. I&apos;m a software engineer from México city with over +9 years of experience
          in the software industry (since 2016). My area of expertise is in back-end and front-end web development. I have
          worked on a variety of projects, from small startups to large enterprises. I&apos;m always eager to learn new technologies and improve my skills.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 mt-8"
      >        <a
          href="#cv"
          className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          View CV
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </motion.section>
  );
}
