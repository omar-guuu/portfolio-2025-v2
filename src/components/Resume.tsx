import Image from 'next/image';
import { education, profile } from '@/data/profile';
import { Section } from './Section';
import { DownloadIcon, ExternalIcon } from './Icons';

export function Resume() {
  return (
    <Section id="resume" title="Education & Resume" muted>
      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,380px)] lg:items-start">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
                >
                  <p className="text-lg font-semibold">{e.degree}</p>
                  <p className="text-gray-700 dark:text-gray-300">{e.school}</p>
                  <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              Resume
            </h3>
            <p className="text-lg text-gray-800 dark:text-gray-200 max-w-xl">
              A one-page PDF with my full work history, ready to share with your hiring team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.cv.pdf}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors"
              >
                <DownloadIcon />
                Download CV (PDF)
              </a>
              <a
                href={profile.cv.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Open in browser
                <ExternalIcon />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <a
          href={profile.cv.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg bg-white"
        >
          <span className="sr-only">Open the CV PDF in a new tab</span>
          <Image
            src={profile.cv.preview}
            alt=""
            width={1545}
            height={2000}
            sizes="(max-width: 1024px) 100vw, 380px"
            className="w-full h-auto motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-[1.02]"
          />
        </a>
      </div>
    </Section>
  );
}
