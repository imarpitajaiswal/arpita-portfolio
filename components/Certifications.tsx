'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "Dec 2025",
    link: "#",
    color: "primary"
  },
  {
    title: "Agentic AI & Advanced LLM Systems",
    issuer: "DeepLearning.AI",
    date: "Oct 2025",
    link: "#",
    color: "secondary"
  },
  {
    title: "Full Stack Engineer Path",
    issuer: "Codecademy",
    date: "Aug 2024",
    link: "#",
    color: "primary"
  },
  {
    title: "SAP Autonomous Enterprise Discoverer",
    issuer: "SAP Learning",
    date: "May 2026",
    link: "#",
    color: "secondary"
  }
];

export default function Certifications() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="certifications" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-[70vh] overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 space-y-4"
      >
        <h2 className="font-heading text-secondary text-sm md:text-lg font-medium tracking-widest uppercase">
          // Verified Credentials
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Professional <span className="text-primary-glow">Certifications</span>
        </h3>
      </motion.div>

      {/* Draggable Carousel */}
      <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-6 md:gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className={`
                min-w-[300px] md:min-w-[350px] p-6 md:p-8 rounded-2xl flex flex-col
                bg-glass-bg backdrop-blur-xl border border-glass-border shadow-glass
                transition-all duration-300 hover:-translate-y-2
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
        </motion.div>
      </motion.div>
      
      {/* Scroll Hint */}
      <div className="mt-8 text-center text-gray-500 font-mono text-xs uppercase tracking-widest hidden md:block">
        &lt; Drag to explore &gt;
      </div>

    </section>
  );
}