import { profile } from '@/data/profile';
import { GitHubIcon, InstagramIcon, LinkedInIcon, MediumIcon, XIcon } from './Icons';

const links = [
  { name: 'LinkedIn', url: profile.social.linkedin, Icon: LinkedInIcon },
  { name: 'GitHub', url: profile.social.github, Icon: GitHubIcon },
  { name: 'Blog on Medium', url: profile.social.medium, Icon: MediumIcon },
  { name: 'X (Twitter)', url: profile.social.twitter, Icon: XIcon },
  { name: 'Instagram', url: profile.social.instagram, Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.{' '}
          <a
            href={profile.social.buyMeACoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-gray-950 dark:hover:text-white"
          >
            Buy me a coffee<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
        <ul className="flex gap-2">
          {links.map(({ name, url, Icon }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} (opens in a new tab)`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
