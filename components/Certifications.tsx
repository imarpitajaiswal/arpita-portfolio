'use client';

import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "Discovering the autonomous enterprise",
    issuer: "SAP Learning",
    date: "May 2026",
    link: "www.linkedin.com/in/imarpitajaiswal",
    color: "primary"
  },
  {
    title: "Advanced Machine Learning Specialization",
    issuer: "Amity University",
    date: "2025",
    link: "www.linkedin.com/in/imarpitajaiswal",
    color: "secondary"
  },
  {
    title: "Agentic AI Foundations",
    issuer: "Saumya Singh Academy",
    date: "2024",
    link: "www.linkedin.com/in/imarpitajaiswal",
    color: "primary"
  },
  {
    title: "Skill India Quiz Challenge Winner",
    issuer: "Ministry of Skill Development & Entrepreneurship",
    date: "2022",
    link: "www.linkedin.com/in/imarpitajaiswal",
    color: "secondary"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-[70vh] overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 space-y-4"
      >
        <h2 className="font-heading text-secondary text-sm md:text-lg font-medium tracking-widest uppercase">
          // Verified Credentials
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Professional <span className="text-primary-glow">Certifications</span>
        </h3>
      </motion.div>

      {/* Native Horizontal Scroll Container */}
      <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth w-full">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`
              min-w-[85vw] md:min-w-[350px] snap-center p-6 md:p-8 rounded-2xl flex flex-col
              bg-glass-bg backdrop-blur-xl border border-glass-border shadow-glass
              transition-all duration-300 hover:-translate-y-2 flex-shrink-0
              ${cert.color === 'primary' ? 'hover:shadow-neon-purple hover:border-primary/50' : 'hover:shadow-neon-blue hover:border-secondary/50'}
            `}
          >
            {/* Premium Icon Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <FaCertificate className={`text-3xl ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
              <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {cert.date}
              </span>
            </div>
            
            {/* Title & Issuer */}
            <h4 className="font-heading text-xl font-bold text-white mb-2 leading-tight">
              {cert.title}
            </h4>
            <p className="font-body text-gray-400 text-sm mb-8 flex-grow">
              Issued by <span className="text-gray-300 font-medium">{cert.issuer}</span>
            </p>
            
            {/* Verification Button */}
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`
                inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading text-sm font-medium transition-all duration-300
                ${cert.color === 'primary' ? 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:shadow-neon-purple' : 'bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20 hover:shadow-neon-blue'}
              `}
            >
              Verify Credential <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
      
      {/* Scroll Hint */}
      <div className="mt-4 text-center text-gray-500 font-mono text-xs uppercase tracking-widest hidden md:block">
        &lt; Scroll to explore &gt;
      </div>

    </section>
  );
}