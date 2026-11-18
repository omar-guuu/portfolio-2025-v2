'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experience, yearsOfExperience, type Engagement, type Job } from '@/data/profile';
import { Section } from './Section';
import { ExternalIcon } from './Icons';

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 3);
}

function Logo({ src, name, size = 'lg' }: { src?: string; name: string; size?: 'lg' | 'sm' }) {
  const box = size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  if (!src) {
    return (
      <div
        className={`${box} shrink-0 rounded-xl bg-gradient-to-br from-blue-700 to-teal-700 text-white font-bold text-sm flex items-center justify-center`}
        aria-hidden="true"
      >
        {initials(name)}
      </div>
    );
  }
  return (
    <div className={`${box} shrink-0 relative rounded-xl bg-white border border-gray-200 dark:border-gray-700 overflow-hidden`}>
      {/* Decorative: the company name is always shown as text next to it. */}
      <Image src={src} alt="" fill sizes="56px" className="object-contain p-1" />
    </div>
  );
}

function EngagementCard({ engagement, job }: { engagement: Engagement; job: Job }) {
  const showLogo = engagement.logo && engagement.logo !== job.logo;
  const meta = [engagement.client, engagement.role].filter(Boolean).join(' · ');
  return (
    <article className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6">
      <div className="flex items-start gap-4">
        {showLogo && <Logo src={engagement.logo} name={engagement.client ?? engagement.name} size="sm" />}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4 className="text-lg font-semibold">
              {engagement.clientUrl ? (
                <a
                  href={engagement.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                >
                  {engagement.name}
                  <ExternalIcon />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                engagement.name
              )}
            </h4>
            {engagement.period !== job.period && (
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{engagement.period}</p>
            )}
          </div>
          {meta && meta !== job.role && <p className="mt-1 text-gray-700 dark:text-gray-300">{meta}</p>}
        </div>
      </div>

      <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-blue-700 dark:marker:text-blue-300 text-gray-800 dark:text-gray-200">
        {engagement.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {engagement.technologies.map((tech) => (
          <li
            key={tech}
            className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 text-blue-900 dark:bg-blue-950/60 dark:text-blue-100 border border-blue-100 dark:border-blue-900"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      muted
      intro={`${yearsOfExperience}+ years across enterprise consulting, product development and teaching, from Microsoft and EY engagements to e-commerce platforms.`}
    >
      <ol className="relative space-y-12">
        {experience.map((job) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="relative grid gap-4 sm:grid-cols-[56px_1fr] sm:gap-6"
          >
            {/* Timeline rail */}
            <div className="hidden sm:flex flex-col items-center">
              <Logo src={job.logo} name={job.company} />
              <div className="mt-3 w-px flex-1 bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
            </div>

            <div>
              <div className="flex items-center gap-3 sm:block">
                <div className="sm:hidden">
                  <Logo src={job.logo} name={job.company} />
                </div>
                <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
                        >
                          {job.company}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{job.role}</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">{job.period}</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {job.engagements.map((engagement) => (
                  <EngagementCard key={engagement.name} engagement={engagement} job={job} />
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
