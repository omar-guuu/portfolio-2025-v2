/**
 * Single source of truth for all portfolio content.
 * Keep this file in sync with the CV (public/files) and the LinkedIn profile:
 * when you update LinkedIn, update the matching entry here and every section
 * of the site (and the SEO metadata) follows.
 */

const CAREER_START_YEAR = 2016;

export const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

export const profile = {
  name: 'Omar Gutierrez',
  shortName: 'Omar.Guuu',
  title: 'Full Stack Software Engineer',
  location: 'Mexico City, Mexico',
  workPreference: 'Open to remote and hybrid roles',
  email: 'omarguuu@outlook.com',
  siteUrl: 'https://omarguuu.com',
  photo: '/images/omar-profile.jpg',
  cv: {
    pdf: '/files/CV2025ENG_C.pdf',
    preview: '/images/CV2025ENG_C.png',
  },
  headline: `Full stack engineer with ${yearsOfExperience}+ years building, testing and supporting web applications for enterprise clients like Microsoft and EY.`,
  summary: [
    `I'm a software engineer from Mexico City. I've worked in the industry since ${CAREER_START_YEAR}, from small startups to global enterprises, with broad experience in the back end and front end development of software in small or large multilingual teams, having proficiency to communicate in English with teams all around the world.`,
    { text: 'Not done yet!', emphasis: true },
    'Most recently I\'ve focused on AI and agents, CI/CD, Test Automation and Reverse Engineering, and I\'m always looking into learning the next thing that will allow me to build software that\'s functional and easy to use.',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/omar-guuu/',
    github: 'https://github.com/omar-guuu',
    medium: 'https://medium.com/@omarguu',
    twitter: 'https://twitter.com/omar_guuu',
    instagram: 'https://www.instagram.com/omar.guuu/',
    buyMeACoffee: 'https://www.buymeacoffee.com/omar.guuu',
  },
} as const;

export interface Engagement {
  name: string;
  client?: string;
  clientUrl?: string;
  role: string;
  period: string;
  logo?: string;
  highlights: string[];
  technologies: string[];
}

export interface Job {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  logo?: string;
  /** Client projects / engagements delivered while at this company. */
  engagements: Engagement[];
}

export const experience: Job[] = [
  {
    company: 'Tata Consultancy Services',
    companyUrl: 'https://www.tcs.com/',
    role: 'Software Engineer',
    period: 'Jul 2021 – Present',
    engagements: [
      {
        name: "EY 'Atlas' Production Support",
        client: 'Ernst & Young',
        clientUrl: 'https://www.ey.com/en_us/services/audit/technology/atlas',
        role: 'Administrative Contractor · Production Support',
        period: 'Jun 2024 – Present',
        logo: '/images/projects/ey.webp',
        highlights: [
          'Support EY Atlas, Ernst & Young\'s global audit platform, keeping its applications and document content available and performant.',
          'Triage and resolve production incidents within SLA and KPI targets, coordinating with teams across multiple time zones.',
          'Implemented monitoring and alerting that surfaces issues before users report them, improving incident response time.',
        ],
        technologies: ['SQL', 'Azure', 'Azure DevOps', 'Application Insights', 'ServiceNow', 'REST APIs'],
      },
      {
        name: "Microsoft 'One Voice ICON'",
        client: 'Microsoft',
        clientUrl: 'https://www.microsoft.com/en-us/dynamics-365',
        role: 'Backend Developer · Test Automation',
        period: 'Jan 2023 – Jun 2024',
        logo: '/images/projects/microsoft.webp',
        highlights: [
          'Cut testing time by 70% by automating test suites in C# and Selenium and wiring them into Azure DevOps CI/CD pipelines.',
          'Developed backend features for a new One Voice application that handles service calls and customer interactions.',
          'Designed complex end-to-end test scenarios that achieved broad coverage of the platform.',
        ],
        technologies: ['C#', 'Selenium', 'Azure DevOps', 'CI/CD', 'YAML', 'PowerShell', 'SQL', 'TDD'],
      },
      {
        name: "EY 'ARC' Global Platform",
        client: 'Ernst & Young',
        role: 'Production Support Engineer',
        period: 'Jul 2021 – Jan 2023',
        logo: '/images/projects/ey.webp',
        highlights: [
          'Reduced average ticket resolution time by 40% for EY\'s ARC platform.',
          'Maintained global web servers across regions, keeping the platform highly available.',
          'Introduced proactive monitoring and worked with international teams to resolve incidents quickly.',
        ],
        technologies: ['SQL Server', 'Windows Server', 'IIS', 'PowerShell', 'SSL/TLS', 'ServiceNow'],
      },
    ],
  },
  {
    company: 'Freelance',
    companyUrl: 'https://omarguuu.com',
    role: 'Freelance Web Developer',
    period: 'Nov 2020 – Jun 2021',
    engagements: [
      {
        name: 'Web development & prototyping',
        role: 'Freelance Web Developer',
        period: 'Nov 2020 – Jun 2021',
        highlights: [
          'Designed, built and deployed omarguuu.com with Next.js and React, including hosting and SSL setup.',
          'Developed a React and Node.js web application end to end.',
          'Prototyped website designs in Figma and InVision.',
        ],
        technologies: ['Next.js', 'React', 'Node.js', 'JavaScript', 'Azure', 'cPanel', 'Figma'],
      },
    ],
  },
  {
    company: 'Kubo Digital',
    companyUrl: 'https://kubodigital.com/',
    role: 'Software Developer',
    period: 'Aug 2018 – Nov 2020',
    logo: '/images/projects/kubodigital.webp',
    engagements: [
      {
        name: 'Ventiapp multichannel e-commerce',
        clientUrl: 'https://ventiapp.mx/',
        role: 'Software Developer',
        period: 'Aug 2018 – Nov 2020',
        logo: '/images/projects/kubodigital.webp',
        highlights: [
          'Integrated Amazon, Mercado Libre, Shopify, WooCommerce and PrestaShop into Ventiapp through their APIs.',
          'Integrated ASPEL SAE, which has no API, by working directly with its database.',
          'Built the shopping cart and improved SEO for the somos-reyes.com store.',
          'Supported clients one on one as they adopted features still in development.',
        ],
        technologies: ['C#', '.NET', 'MySQL', 'REST APIs', 'JavaScript', 'AngularJS', 'HTML', 'CSS'],
      },
      {
        name: 'MyTPI, OnBaseU & Raquetfit',
        client: 'Titleist Performance Institute',
        clientUrl: 'https://www.mytpi.com/',
        role: 'Full Stack Developer',
        period: 'Aug 2020 – Nov 2020',
        logo: '/images/projects/mytpi.webp',
        highlights: [
          'Shipped new features on an established codebase, such as a promotion-code system, without breaking existing functionality.',
          'Fixed bugs and refined the UI across the back end and front end.',
        ],
        technologies: ['C#', '.NET', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Git'],
      },
    ],
  },
  {
    company: 'Polytechnic University of Tecámac',
    companyUrl: 'https://uptecamac.edomex.gob.mx/',
    role: 'Full Stack Developer & Professor',
    period: 'Jan 2017 – May 2018',
    logo: '/images/projects/university.webp',
    engagements: [
      {
        name: "'SUIE UPT' student information system",
        role: 'Full Stack Developer & Professor',
        period: 'Jan 2017 – May 2018',
        highlights: [
          'Developed and supported SUIE UPT, the university\'s student and teacher management system, including secure JWT-based authentication.',
          'Built an RFID data writer for student ID cards with C++ and Arduino.',
          'Taught and mentored students in modern development practices through real-world projects.',
        ],
        technologies: ['C#', '.NET', 'SQL', 'JWT', 'JavaScript', 'HTML', 'CSS', 'Postman', 'C++', 'Arduino'],
      },
    ],
  },
  {
    company: 'C&A Systems',
    companyUrl: 'https://casystem.com.mx/es-mx/inicio',
    role: 'SharePoint Developer',
    period: 'Oct 2016 – Jan 2017',
    logo: '/images/projects/ca.webp',
    engagements: [
      {
        name: 'SharePoint intranet solutions',
        role: 'SharePoint Developer',
        period: 'Oct 2016 – Jan 2017',
        highlights: [
          'Customized SharePoint intranets for clients including PepsiCo, turning the design team\'s mockups into working pages.',
          'Wrote technical documentation for an application for Mexico\'s Secretariat of Economy, working in a Scrum team.',
        ],
        technologies: ['SharePoint', 'JavaScript', 'HTML', 'CSS', 'Scrum'],
      },
    ],
  },
];

export const education = [
  {
    school: 'Polytechnic University of Tecámac',
    degree: "Bachelor's degree in Software Engineering",
    period: '2013 – 2016',
  },
];

/** The stack recruiters should notice first. */
export const coreStack = [
  'C#',
  '.NET',
  'SQL Server',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Azure DevOps',
  'Selenium',
  'CI/CD',
];

export const skillClusters = [
  {
    title: 'Backend',
    description: 'APIs, business logic and integrations',
    icons: [
      { name: 'C#', icon: 'CSharp.svg' },
      { name: '.NET', icon: 'NET.svg' },
      { name: '.NET Core', icon: 'NET core.svg', whiteInDark: true },
      { name: 'Node.js', icon: 'Node.js.svg' },
      { name: 'Java', icon: 'Java.svg' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Responsive, accessible user interfaces',
    icons: [
      { name: 'React', icon: 'React.svg' },
      { name: 'Next.js', icon: 'Next.js.svg', whiteInDark: true },
      { name: 'TypeScript', icon: 'TypeScript.svg' },
      { name: 'JavaScript', icon: 'JavaScript.svg' },
      { name: 'HTML5', icon: 'HTML5.svg' },
      { name: 'CSS3', icon: 'CSS3.svg' },
      { name: 'Tailwind CSS', icon: 'Tailwind CSS.svg' },
      { name: 'AngularJS', icon: 'AngularJS.svg' },
      { name: 'Vue.js', icon: 'Vue.js.svg' },
      { name: 'Vite', icon: 'Vite.js.svg' },
      { name: 'Bootstrap', icon: 'Bootstrap.svg' },
      { name: 'jQuery', icon: 'jQuery.svg' },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational and cloud data stores',
    icons: [
      { name: 'SQL Server', icon: 'Microsoft SQL Server.svg', whiteInDark: true },
      { name: 'Azure SQL', icon: 'Azure SQL Database.svg' },
      { name: 'MySQL', icon: 'MySQL.svg', whiteInDark: true },
      { name: 'Firebase', icon: 'Firebase.svg' },
    ],
  },
  {
    title: 'Testing, Cloud & DevOps',
    description: 'Automation, pipelines and infrastructure',
    icons: [
      { name: 'Azure', icon: 'Azure.svg' },
      { name: 'Azure DevOps', icon: 'Azure Devops.svg' },
      { name: 'Selenium', icon: 'Selenium.svg' },
      { name: 'Playwright', icon: 'Playwrite.svg' },
      { name: 'PowerShell', icon: 'Powershell.svg' },
      { name: 'YAML', icon: 'YAML.svg', whiteInDark: true },
      { name: 'NGINX', icon: 'NGINX.svg' },
      { name: 'Git', icon: 'Git.svg' },
      { name: 'GitHub', icon: 'GitHub.svg', whiteInDark: true },
    ],
  },
  {
    title: 'AI',
    description: 'AI assistants and agents for building software',
    icons: [
      { name: 'Claude', icon: 'Claude.svg' },
      { name: 'GitHub Copilot', icon: 'GitHub Copilot.svg', whiteInDark: true },
      { name: 'Gemini', icon: 'Gemini.svg' },
    ],
  },
  {
    title: 'Tools',
    description: 'Day-to-day development and collaboration',
    icons: [
      { name: 'Visual Studio', icon: 'Visual Studio.svg', whiteInDark: true },
      { name: 'VS Code', icon: 'Visual Studio Code (VS Code).svg' },
      { name: 'Postman', icon: 'Postman.svg' },
      { name: 'npm', icon: 'NPM.svg' },
      { name: 'NuGet', icon: 'NuGet.svg', whiteInDark: true },
      { name: 'Figma', icon: 'Figma.svg' },
      { name: 'WordPress', icon: 'WordPress.svg' },
      { name: 'FileZilla', icon: 'FileZilla.svg' },
      { name: 'Trello', icon: 'Trello.svg' },
    ],
  },
];
