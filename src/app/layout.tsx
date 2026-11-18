import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import { profile, education, coreStack, yearsOfExperience } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} | ${profile.title} (C#/.NET, React)`;
const description = `${profile.name} is a full stack software engineer in ${profile.location} with ${yearsOfExperience}+ years of experience in C#/.NET, SQL, React and test automation, working with clients such as Microsoft and EY. ${profile.workPreference}.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Full Stack Developer",
    "Software Engineer",
    "C#",
    ".NET",
    "SQL Server",
    "React",
    "Next.js",
    "TypeScript",
    "Test Automation",
    "Selenium",
    "Azure DevOps",
    "Mexico City",
    "Remote",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    siteName: profile.name,
    title,
    description,
    locale: "en_US",
    firstName: "Omar",
    lastName: "Gutierrez",
    images: [{ url: profile.photo, width: 800, height: 1000, alt: `Portrait of ${profile.name}` }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@omar_guuu",
    images: [profile.photo],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

// Structured data so search engines (and recruiters' tools) can read the profile.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.photo}`,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mexico City",
    addressCountry: "MX",
  },
  alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: coreStack,
  sameAs: [profile.social.linkedin, profile.social.github, profile.social.medium, profile.social.twitter],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
