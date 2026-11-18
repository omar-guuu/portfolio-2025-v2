import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  intro?: ReactNode;
  muted?: boolean;
  children: ReactNode;
}

/** Consistent section shell: landmark + labelled heading + alternating background. */
export function Section({ id, title, intro, muted = false, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        muted ? 'bg-gray-50 dark:bg-gray-900/60 border-y border-gray-200 dark:border-gray-800' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 max-w-2xl">
          <h2 id={headingId} className="text-3xl sm:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
