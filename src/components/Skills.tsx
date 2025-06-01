'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// type TechIcon = {
//   name: string;
//   icon: string;
// };

export function Skills() {
  const skillClusters = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      icons: [
        { name: "React", icon: "React.svg" },
        { name: "TypeScript", icon: "TypeScript.svg" },
        { name: "JavaScript", icon: "JavaScript.svg" },
        { name: "HTML5", icon: "HTML5.svg" },
        { name: "CSS3", icon: "CSS3.svg" },
        { name: "Tailwind CSS", icon: "Tailwind CSS.svg" },
        { name: "AngularJS", icon: "AngularJS.svg" },
        { name: "Vue.js", icon: "Vue.js.svg" },
        { name: "Next.js", icon: "Next.js.svg" },
        { name: "Bootstrap", icon: "Bootstrap.svg" },
        { name: "jQuery", icon: "jQuery.svg" },
        { name: "Vite.js", icon: "Vite.js.svg" },
      ]
    },
    {
      title: "Backend Development",
      description: "Creating robust and scalable server-side solutions",
      icons: [
        { name: "C#", icon: "CSharp.svg" },
        { name: ".NET Core", icon: "NET core.svg" },
        { name: ".NET", icon: "NET.svg" },
        { name: "Node.js", icon: "Node.js.svg" },
        { name: "Java", icon: "Java.svg" },
        { name: "NGINX", icon: "NGINX.svg" },
        { name: "WordPress", icon: "WordPress.svg" },
      ]
    },
    {
      title: "Database & Infrastructure",
      description: "Database management and infrastructure solutions",
      icons: [
        { name: "MySQL", icon: "MySQL.svg" },
        { name: "Microsoft SQL Server", icon: "Microsoft SQL Server.svg" },
        { name: "Azure SQL Database", icon: "Azure SQL Database.svg" },
        { name: "Firebase", icon: "Firebase.svg" },
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure and development tools",
      icons: [
        { name: "Azure", icon: "Azure.svg" },
        { name: "Azure DevOps", icon: "Azure Devops.svg" },
        { name: "Git", icon: "Git.svg" },
        { name: "GitHub", icon: "GitHub.svg" },
        { name: "YAML", icon: "YAML.svg" },
      ]
    },
    {
      title: "Development Tools",
      description: "Tools and utilities for efficient development",
      icons: [
        { name: "Visual Studio", icon: "Visual Studio.svg" },
        { name: "VS Code", icon: "Visual Studio Code (VS Code).svg" },
        { name: "NPM", icon: "NPM.svg" },
        { name: "NuGet", icon: "NuGet.svg" },
        { name: "Postman", icon: "Postman.svg" },
        { name: "Selenium", icon: "Selenium.svg" },
        { name: "Playwrite", icon: "Playwrite.svg" },
        { name: "FileZilla", icon: "FileZilla.svg" },
        { name: "Powershell", icon: "Powershell.svg" },
        { name: "Figma", icon: "Figma.svg" },
        { name: "Trello", icon: "Trello.svg" },
      ]
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical expertise spans across various domains of software development,
            from frontend to backend technologies and cloud solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillClusters.map((cluster) => (
            <motion.div
              key={cluster.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{cluster.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {cluster.description}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {cluster.icons.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center group relative"
                  >
                    <Image
                      src={`/images/tech/${tech.icon}`}
                      alt={tech.name}
                      width={48}
                      height={48}
                    />
                    <span className="mt-2 text-sm">{tech.name}</span>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}