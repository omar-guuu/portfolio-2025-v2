'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechIconProps {
  name: string;
  icon: string;
}

function TechIcon({ name, icon }: TechIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center group relative"
    >      <Image
        src={`/images/tech/${icon}`}
        alt={name}
        width={48}
        height={48}
      />
      <span className="mt-2 text-sm">{name}</span>
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {name}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const techStack: TechIconProps[] = [
    { name: "C#", icon: "CSharp.svg" },
    { name: ".NET Core", icon: "NET core.svg" },
    { name: "Azure", icon: "Azure.svg" },
    { name: "React", icon: "React.svg" },
    { name: "TypeScript", icon: "TypeScript.svg" },
    { name: "JavaScript", icon: "JavaScript.svg" },
    { name: "Node.js", icon: "Node.js.svg" },
    { name: "HTML5", icon: "HTML5.svg" },
    { name: "CSS3", icon: "CSS3.svg" },
    { name: "Tailwind CSS", icon: "Tailwind CSS.svg" },
    { name: "Firebase", icon: "Firebase.svg" },
    { name: "Selenium", icon: "Selenium.svg" },
    { name: "Postman", icon: "Postman.svg" },
    { name: "NPM", icon: "NPM.svg" },
    { name: "jQuery", icon: "jQuery.svg" },
    { name: "Java", icon: "Java.svg" },
    { name: "AngularJS", icon: "AngularJS.svg" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center pt-32"
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
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" style={{ marginRight: '10px', marginLeft: '10px' }}>
          My name is Omar Gutierrez. I&apos;m a software engineer from México city with over +9 years of experience
          in the software industry (since 2016), My area of expertise is in back-end and front-end web development, I have
          worked on a variety of projects, from small startups to large enterprises, I'm always eager to learn new technologies and improve my skills.
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
      </motion.div>      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl mx-auto"
      >
        {techStack.map((tech) => (
          <TechIcon key={tech.name} {...tech} />
        ))}
      </motion.div>
    </motion.section>
  );
}
