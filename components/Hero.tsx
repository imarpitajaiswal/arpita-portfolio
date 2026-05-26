'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-6 md:px-12 overflow-hidden w-full max-w-7xl mx-auto">
      
      {/* Extremely subtle background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none -z-10" />

      <div className="grid md:grid-cols-2 gap-16 items-center w-full z-10">
        
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Architecting <br className="hidden md:block" />
              <span className="text-gray-400">Intelligent Systems.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg font-body">
              Hi, I’m Arpita Jaiswal. An AI Engineer specializing in Agentic workflows, scalable LLM infrastructure, and high-performance web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Primary CTA */}
            <a 
              href="#projects"
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
            >
              View Engineering Work
            </a>
            {/* Secondary CTA */}
            <a 
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-colors duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons - Clean and Minimal */}
          <div className="flex gap-6 pt-6 text-xl text-gray-500">
            {[
              { icon: FaGithub, href: 'https://github.com/imarpitajaiswal' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/imarpitajaiswal' },
              { icon: FaEnvelope, href: 'mailto:jaiswalarpita222@gmail.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Refined Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Very subtle glow, not a neon ring */}
            <div className="absolute -inset-4 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden bg-[#0A0A0A] flex items-center justify-center z-10 grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/profile.png" 
                alt="Arpita Jaiswal" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}