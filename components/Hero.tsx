'use client';

import { motion } from 'framer-motion';
// @ts-ignore
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import NeonButton from './ui/NeonButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 md:px-12 overflow-hidden w-full max-w-7xl mx-auto">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="font-heading text-secondary text-sm md:text-lg font-medium tracking-widest uppercase">
            // Welcome to the future
          </h2>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Hi, I’m <span className="text-primary-glow animate-pulse">Arpita Jaiswal</span>
          </h1>
          
          {/* Animated Typing Effect */}
          <div className="font-body text-xl md:text-2xl text-gray-400 min-h-[60px] md:min-h-[40px]">
            <Typewriter
              options={{
                strings: [
                  'AI Engineer',
                  'Full Stack Developer',
                  'Agentic AI Enthusiast'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 60,
                cursor: '|',
                wrapperClassName: 'text-secondary-glow font-medium'
              }}
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <NeonButton variant="purple" href="/resume.pdf" download>Download Resume</NeonButton>
            <NeonButton variant="blue" href="#projects">View Projects</NeonButton>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-8 text-2xl text-gray-500">
            {[
              { icon: FaGithub, href: 'https://github.com/imarpitajaiswal', color: 'hover:text-white hover:drop-shadow-[0_0_10px_#ffffff]' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/imarpitajaiswal', color: 'hover:text-[#0A66C2] hover:drop-shadow-[0_0_10px_#0A66C2]' },
              { icon: FaEnvelope, href: 'mailto:jaiswalarpita222@gmail.com', color: 'hover:text-primary hover:drop-shadow-[0_0_10px_#A855F7]' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`transition-colors duration-300 ${social.color}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Circular Futuristic Profile placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center md:justify-end relative"
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            {/* Animated Glowing Ring */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, #A855F7, #3B82F6, #A855F7)',
                filter: 'blur(20px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-background flex items-center justify-center shadow-neon-blue z-10">
              <span className="text-gray-500 font-heading tracking-widest text-sm">[ IMAGE GOES HERE ]</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}