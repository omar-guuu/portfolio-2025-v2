'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  period: string;
  role: string;
  company?: string;
  companyUrl?: string;
  description: string;
  challenges?: string[];
  achievements?: string[];
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "EY 'ATLAS' Production Support",
      period: "Jun 2024 - Present",
      role: "Administrative contractor",
      company: "EY Atlas (via Tata Consultancy Services)",
      companyUrl: "https://www.ey.com/en_us/services/audit/technology/atlas",
      description: "Providing production support for Ernst & Young's ATLAS platform, ensuring system stability and performance for applications and it's contents (documents).",
      challenges: [
        "Managing enterprise applications, ensuring high availability",
        "Troubleshooting production issues, and resolving incidents",
        "Coordinating with global teams across different time zones"
      ],
      achievements: [
        "Compliance with SLAs and KPIs",
        "improved incident response time",
        "Implemented monitoring and alerting systems to proactively identify issues"
      ],      technologies: ["SQL", "Azure", "DevOps", "REST APIs", "CMS"],
      imageUrl: "/images/projects/ey.webp"
    },
    {
      title: "Microsoft's 'One Voice ICON' project",
      period: "Jan 2023 - Jun 2024",
      role: "Backend dev | Test Automation",
      company: "Microsoft (via Tata Consultancy Services)",
      companyUrl: "https://www.microsoft.com/en-us/dynamics-365",
      description: "Involved in the development and automated testing for Microsoft's 'One Voice ICON' platform, implementing test coverage and CI/CD pipelines.",
      challenges: [
        "Implementing complex test scenarios within the One Voice platform",
        "Integrating automated tests into existing CI/CD pipelines",
        "Develop and test a new application for service calls and customer interactions",
      ],
      achievements: [
        "Involved in the development of a new application for the One Voice platform",
        "Reduced testing time by 70% through automation and CI/CD integration",
        "Achieved broad test coverage",
      ],      technologies: ["Test-Driven Development", "Azure DevOps", "Selenium", "C#", "PowerShell", "CI/CD", "YAML", "SQL"],
      imageUrl: "/images/projects/microsoft.webp"
    },
    {
      title: "EY 'ARC' Global Platform",
      period: "Jul 2021 - Jan 2023",
      role: "Production Support Engineer",
      company: "EY ARC (via Tata Consultancy Services)",
      description: "Managed and maintained global web servers for Ernst & Young's ARC platform, ensuring high availability and performance across different regions.",
      challenges: [
        "Managing distributed systems across multiple global locations",
        "Resolving production issues in a timely manner",
        "Coordinating with international teams for incident resolution"
      ],
      achievements: [
        "Maintained several servers and provided support with multiple teams accross the globe",
        "Reduced average ticket resolution time by 40%",
        "Implemented proactive monitoring systems"
      ],      technologies: ["SQL Server", "SQL", "IIS", "PowerShell", "SSL" ,"Service Now"],
      imageUrl: "/images/projects/ey.webp"
    },
    {
      title: "Kubo Digital's Ventiapp E-commerce Integration",
      period: "Aug 2018 - Nov 2020",
      role: "Software Developer Engineer",
      company: "Kubo Digital",
      companyUrl: "https://ventiapp.mx/",
      description: "Involved in the development of Ventiapp, an e-commerce platform with multiple API integrations for other e-commerce platforms",
      challenges: [
        "Develop and integrate multiple e-commerce APIs into one platform",
        "Developing custom features for Ventiapp application",
        "1 on 1 support for clients using the platform with in development features",
        "Implement new features while working with other software developers and designers",
      ],
      achievements: [
        "Successfully integrated multiple e-commerce via APIs into Ventiapp",
        "Have a comprehensive understanding of e-commerce platforms and their bussiness logic",
        "Integrated ASPEL SAE with no API by handling the raw database data",
        "Developed and integrated a shopping cart system for the 'somos-reyes dot com' e-commerce",
      ],      technologies: ["C#", ".NET", "MySQL", "REST APIs", "JavaScript", "Authentication", "CSS"],
      imageUrl: "/images/projects/kubodigital.webp"
    },
    {
      title: "MyTPI web Application",
      period: "Aug 2020 - Nov 2020",
      role: "Full Stack Developer Engineer",
      company: "Titleist Performance Institute (via Kubo Digital)",
      companyUrl: "https://www.mytpi.com/",
      description: "Involved in the maintenance of myTPI website by making changes in the backend ad front end.",
      challenges: [
        "Analyse and implement changes in the existing codebase",
        "Add new features for the myTPI application",
        "Fixing and debugging issues in the existing codebase",
      ],
      achievements: [
        "Adapted to the existing codebase and made changes without breaking existing functionality",
        "Successfully implemented new features such as the promotion code system",
        "Improved the user experience by fixing bugs and enhancing the UI",
      ],      technologies: ["C#", ".NET", "SQL", "JavaScript", "HTML", "CSS"],
      imageUrl: "/images/projects/mytpi.webp"
    },
    {
      title: "'SUIE UPT' University Management System",
      period: "Jan 2017 - May 2018",
      role: "Full Stack Developer & Professor",
      company: "Universidad Politécnica de Tecámac",
      companyUrl: "https://uptecamac.edomex.gob.mx/",
      description: "Developed a student/teacher management system while serving as a professor, mentoring students in modern development practices.",
      challenges: [
        "Develop and maintain a management system for teachers/students for the university",
        "Implementing secure credential management system",
        "Balancing development with teaching responsibilities"
      ],
      achievements: [
        "Successfully contributed to the development and support of the university management system 'SUIE UPT'",
        "Have a comprehensive understanding backend and frontend development principles",
        "Mentored students in development practices and technologies, while giving them projects to work on",
      ],      technologies: ["C#", ".NET", "MySQL", "JavaScript", "CSS", "HTML", "Authentication", "JWT"],
      imageUrl: "/images/projects/university.webp"
    },
    {
      title: "SharePoint Intranet Solutions",
      period: "Oct 2016 - Jan 2017",
      role: "SharePoint Developer",
      company: "C&A Systems",
      companyUrl: "https://casystem.com.mx/es-mx/inicio",
      description: "Maintained intranet solutions for the company's clients, and contributed in the documentation of an application for Mexico's Secretariat of Economy.",
      challenges: [
        "Implementing SharePoint customizations in intranet solutions",
        "Creating user-friendly documentation for a government application",
        "Working with designers to implement their designs in SharePoint",
      ],
      achievements: [
        "Successfully delivered multiple SharePoint installations",
        "Created comprehensive technical documentation",
        "Implemented custom designs provided by the design team into SharePoint",
      ],      technologies: ["SharePoint", "JavaScript", "CSS", "HTML"],
      imageUrl: "/images/projects/ca.webp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            This is professional experience throughout the years and the technologies used, please refeer to my
            CV for a more detailed picture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {project.imageUrl ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600" />
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                </div>

                {project.company && (
                  <div className="flex items-center mb-4">
                    {project.companyUrl ? (
                      <a
                        href={project.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {project.company}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">
                        {project.company}
                      </span>
                    )}
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{project.role}</span>
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    >
                      <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      <span>Github</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
