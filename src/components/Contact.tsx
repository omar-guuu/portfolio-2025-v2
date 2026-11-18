'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';
import { Section } from './Section';
import { GitHubIcon, LinkedInIcon, MailIcon, MediumIcon } from './Icons';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable (e.g. insecure context): the mailto link still works.
    }
  };

  return (
    <Section
      id="contact"
      title="Let's work together"
      intro="Have an interesting project and want to collaborate? I'm open to full stack, .NET and test automation roles. If you're hiring or have a project in mind, email me. I usually reply within a day."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="mt-1 text-gray-700 dark:text-gray-300">The fastest way to reach me.</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors break-all"
            >
              <MailIcon />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy address'}
            </button>
            <span role="status" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
          <h3 className="text-xl font-semibold">Professional profiles</h3>
          <p className="mt-1 text-gray-700 dark:text-gray-300">Work history, code and writing.</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <LinkedInIcon />
                LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <GitHubIcon />
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={profile.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <MediumIcon />
                Blog
                <span className="sr-only">on Medium (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
