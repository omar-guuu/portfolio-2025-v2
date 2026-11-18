'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { DownloadIcon, GitHubIcon, LinkedInIcon, LocationIcon, MediumIcon } from './Icons';

export function Hero() {
  return (
    <section id="about" aria-labelledby="about-heading" className="pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h1 id="about-heading" className="text-4xl sm:text-6xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-3 text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-700 dark:from-blue-400 dark:to-teal-300">
              {profile.title}
            </p>

            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-700 dark:text-gray-300">
              <span className="inline-flex items-center gap-1">
                <LocationIcon />
                {profile.location}
              </span>
              <span aria-hidden="true" className="text-gray-400">•</span>
              <span>{profile.workPreference}</span>
            </p>

            <p className="mt-6 text-lg sm:text-xl text-gray-800 dark:text-gray-200 max-w-2xl">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.cv.pdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
              >
                <DownloadIcon />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedInIcon />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Blog on Medium (opens in a new tab)"
              >
                <MediumIcon />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="order-1 lg:order-2 mx-auto"
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-600/30 to-teal-500/30 blur-xl" aria-hidden="true" />
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                className="relative rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800"
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
                priority
                style={{ objectPosition: '50% 30%' }}
              />
            </div>
          </motion.div>
        </div>

        {/* About */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[200px_1fr]">
          <h2 className="text-2xl font-bold">About me</h2>
          <div className="space-y-4 text-lg text-gray-800 dark:text-gray-200 max-w-3xl">
            {profile.summary.map((paragraph) =>
              typeof paragraph === 'string' ? (
                <p key={paragraph}>{paragraph}</p>
              ) : (
                <p key={paragraph.text} className="text-xl sm:text-2xl font-bold text-gray-950 dark:text-white">
                  {paragraph.text}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
