'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "DocuMind (RAG Assistant)",
    description: "An LLM-powered document query system utilizing advanced vector databases to strictly eliminate hallucinations and ensure precise document analysis.",
    tech: ["Python", "LangChain", "LLMs", "Vector DB"],
    github: "https://github.com/imarpitajaiswal/DocuMind",
    live: "#",
    color: "primary"
  },
  {
    title: "SkillMatch-AI",
    description: "A sophisticated resume analyzer utilizing TF-IDF and Cosine Similarity algorithms to optimize candidate alignment with specific job descriptions.",
    tech: ["Machine Learning", "NLP", "Python", "Scikit-Learn"],
    github: "https://github.com/imarpitajaiswal/SkillMatch-AI",
    live: "#",
    color: "secondary"
  },
  {
    title: "Smart-Expense-Tracker",
    description: "A performance-optimized financial utility capable of processing 500+ monthly transactions while maintaining 99% data integrity and visualization.",
    tech: ["Next.js", "React", "Data Processing", "Node.js"],
    github: "https://github.com/imarpitajaiswal/Smart-Expense-Tracker",
    live: "#",
    color: "primary"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-screen">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-4"
      >
        <h2 className="font-heading text-secondary text-sm md:text-lg font-medium tracking-widest uppercase">
          // Deployed Systems
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-secondary-glow">Projects</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:gap-8 z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`
              group relative rounded-2xl overflow-hidden bg-glass-bg backdrop-blur-xl border border-glass-border shadow-glass 
              transition-all duration-500 flex flex-col h-full
              ${project.color === 'primary' ? 'hover:shadow-neon-purple hover:border-primary/50' : 'hover:shadow-neon-blue hover:border-secondary/50'}
            `}
          >
            {/* Cyberpunk Gradient Image Placeholder */}
            <div className="relative w-full h-48 md:h-52 overflow-hidden">
              <div className={`absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-110 ${
                project.color === 'primary' 
                  ? 'bg-gradient-to-br from-[#050816] via-primary/40 to-[#050816]' 
                  : 'bg-gradient-to-br from-[#050816] via-secondary/40 to-[#050816]'
              }`} />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_14px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading tracking-widest text-white/30 text-sm border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                  [ VISUAL DATA CORRUPTED ]
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h4 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-primary-glow transition-colors">
                {project.title}
              </h4>
              <p className="font-body text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="text-lg" /> Source Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-medium transition-colors ${project.color === 'primary' ? 'text-primary hover:text-primary-glow' : 'text-secondary hover:text-secondary-glow'}`}>
                  <FaExternalLinkAlt className="text-sm" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}