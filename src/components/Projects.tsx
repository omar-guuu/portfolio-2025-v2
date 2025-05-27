'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Full Stack Development",
      description: "Extensive experience in developing full-stack applications using modern technologies and best practices. Specialized in creating robust and scalable solutions.",
      technologies: ["C#", "JavaScript", "TypeScript", "React", "Angular"],
    },
    {
      title: "Backend Development",
      description: "Strong foundation in backend development with focus on creating efficient and maintainable server-side applications and APIs.",
      technologies: ["C#", ".NET", "SQL Server", "REST APIs"],
    },
    {
      title: "Frontend Development",
      description: "Expertise in creating responsive and user-friendly web interfaces using modern frontend frameworks and libraries.",
      technologies: ["React", "Angular", "Next.js", "Tailwind CSS"],
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Here are some of my key areas of expertise and professional experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {project.imageUrl && (
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn more →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
