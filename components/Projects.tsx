'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "DocuMind (RAG Assistant)",
    description: "An LLM-powered document query system utilizing advanced vector databases to strictly eliminate hallucinations and ensure precise document analysis.",
    tech: ["Python", "Vector DB", "LLMs", "LangChain"],
    github: "https://github.com/imarpitajaiswal/DocuMind",
    live: "https://github.com/imarpitajaiswal/DocuMind",
  },
  {
    title: "SkillMatch-AI",
    description: "A sophisticated resume analyzer utilizing TF-IDF and Cosine Similarity algorithms to optimize candidate alignment with specific job descriptions.",
    tech: ["Machine Learning", "NLP", "Python", "Scikit-Learn"],
    github: "https://github.com/imarpitajaiswal/SkillMatch-AI",
    live: "https://github.com/imarpitajaiswal/SkillMatch-AI",
  },
  {
    title: "Smart-Expense-Tracker",
    description: "A performance-optimized financial utility capable of processing 500+ monthly transactions while maintaining 99% data integrity and visualization.",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/imarpitajaiswal/Smart-Expense-Tracker",
    live: "https://github.com/imarpitajaiswal/Smart-Expense-Tracker",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-screen border-t border-white/5">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 space-y-3"
      >
        <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase">
          Deployed Architecture
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Featured Engineering
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors duration-300"
          >
            {/* Vercel-style Minimalist Header / Diagram Area */}
            <div className="relative w-full h-48 bg-[#111111] border-b border-white/5 overflow-hidden flex items-center justify-center">
               {/* Subtle Dot Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Abstract Tech Iconography based on title */}
              <div className="z-10 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                <span className="font-mono text-gray-400 text-sm">
                  {project.title.substring(0, 2).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content Container - Flex Grow ensures equal heights */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links - Anchored to bottom */}
              <div className="flex gap-5 mt-auto pt-5 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="text-lg" /> Source
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <FaExternalLinkAlt className="text-sm" /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}