'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "Discovering the Autonomous Enterprise",
    issuer: "SAP Learning",
    date: "May 2026",
    link: "https://www.linkedin.com/in/imarpitajaiswal",
  },
  {
    title: "Advanced Machine Learning & AI",
    issuer: "DeepLearning.AI",
    date: "2025",
    link: "https://www.linkedin.com/in/imarpitajaiswal",
  },
  {
    title: "Full Stack Engineering Path",
    issuer: "Codecademy",
    date: "Aug 2024",
    link: "https://www.linkedin.com/in/imarpitajaiswal",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "https://www.linkedin.com/in/imarpitajaiswal",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 space-y-3"
      >
        <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase">
          Verified Credentials
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Professional Certifications
        </h3>
      </motion.div>

      {/* Native Horizontal Scroll Container with Hidden Scrollbar */}
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="min-w-[85vw] md:min-w-[380px] snap-center p-8 rounded-xl flex flex-col bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-300 flex-shrink-0 group"
          >
            {/* Premium Icon Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
                <FaShieldAlt className="text-lg" />
              </div>
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {cert.date}
              </span>
            </div>
            
            {/* Title & Issuer */}
            <h4 className="text-xl font-semibold text-white mb-2 leading-tight tracking-tight">
              {cert.title}
            </h4>
            <p className="text-gray-400 text-sm mb-8 flex-grow">
              Issued by <span className="text-gray-300 font-medium">{cert.issuer}</span>
            </p>
            
            {/* Verification Button - Premium Ghost Style */}
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-medium text-gray-400 bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Verify Credential <FaExternalLinkAlt className="text-xs" />
            </a>
          </motion.div>
        ))}
      </div>
      
      {/* Scroll Hint */}
      <div className="flex items-center gap-4 mt-2">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest hidden md:block">
          Swipe to explore
        </span>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

    </section>
  );
}