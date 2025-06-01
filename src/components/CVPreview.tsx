'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function CVPreview() {
  return (
    <section id="cv" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">My Resume</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Take a look at my professional experience and qualifications
          </p>
          
          <div className="flex justify-center">
            <motion.div 
              className="relative w-full max-w-4xl aspect-[1/1.414] shadow-xl rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/CV2025ENG_C.png"
                alt="CV Preview"
                fill
                className="object-contain"
                quality={100}
              />
              <a
                href="/files/CV2025ENG_C.pdf"
                download
                className="absolute bottom-4 right-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
