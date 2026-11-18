'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { coreStack, skillClusters } from '@/data/profile';
import { Section } from './Section';

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="The tools I use day to day, with my core stack first."
    >
      <div className="mb-10">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
          Core stack
        </h3>
        <ul className="flex flex-wrap gap-2">
          {coreStack.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 rounded-full text-sm font-semibold bg-blue-700 text-white dark:bg-blue-300 dark:text-gray-950"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillClusters.map((cluster) => (
          <motion.div
            key={cluster.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
          >
            <h3 className="text-xl font-semibold">{cluster.title}</h3>
            <p className="mt-1 mb-5 text-sm text-gray-700 dark:text-gray-300">{cluster.description}</p>
            <ul className="grid grid-cols-3 sm:grid-cols-4 gap-x-3 gap-y-5">
              {cluster.icons.map((tech) => (
                <li key={tech.name} className="flex flex-col items-center text-center">
                  {/* alt="" because the visible label below already names the technology. */}
                  {/* Dark single-color logos are rendered white in dark mode so they stay visible. */}
                  <Image
                    src={`/images/tech/${tech.icon}`}
                    alt=""
                    width={40}
                    height={40}
                    className={`h-10 w-10 object-contain ${'whiteInDark' in tech && tech.whiteInDark ? 'dark:brightness-0 dark:invert' : ''}`}
                  />
                  <span className="mt-2 text-sm leading-tight">{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
