'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaPaperPlane, FaDownload } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-[90vh] flex flex-col justify-center">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="font-heading text-primary text-sm md:text-lg font-medium tracking-widest uppercase">
          // Initialize Connection
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Let&apos;s Work <span className="text-primary-glow">Together</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 z-10">
        
        {/* Left: Contact Info & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 flex flex-col justify-center"
        >
          <div>
            <h4 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to build the future?
            </h4>
            <p className="font-body text-gray-400 leading-relaxed text-sm md:text-base">
              Whether you need a scalable Agentic AI system, a high-performance web architecture, or just want to talk tech—my inbox is always open. Let&apos;s engineer something extraordinary.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="mailto:jaiswalarpita222@gmail.com?subject=Inquiry from Portfolio: Let's Work Together"
              className="flex items-center justify-center gap-2 bg-primary/20 text-primary border border-primary/50 hover:bg-primary/40 hover:shadow-neon-purple px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-300"
            >
              Hire Me <FaPaperPlane size={14} />
            </a>
            <a 
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30 px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-300"
            >
              Download Resume <FaDownload size={14} />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-widest">Connect via Network</p>
            <div className="flex gap-6 text-2xl text-gray-400">
              <a href="https://github.com/imarpitajaiswal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/imarpitajaiswal" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-all transform hover:-translate-y-1"><FaLinkedin /></a>
              <a href="mailto:jaiswalarpita222@gmail.com" className="hover:text-primary transition-all transform hover:-translate-y-1"><FaEnvelope /></a>
              <a href="#" className="opacity-50 cursor-not-allowed hover:text-gray-400"><FaTwitter /></a>
            </div>
          </div>
        </motion.div>

        {/* Right: Glassmorphism Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="bg-glass-bg backdrop-blur-xl border border-glass-border shadow-glass rounded-2xl p-6 md:p-8 space-y-6">
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono tracking-widest text-gray-400 uppercase">Name</label>
              <input type="text" name="name" required placeholder="Your Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/5 transition-all" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono tracking-widest text-gray-400 uppercase">Email</label>
              <input type="email" name="email" required placeholder="your@email.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/5 transition-all" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono tracking-widest text-gray-400 uppercase">Message</label>
              <textarea name="message" required rows={4} placeholder="How can I help you?" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary/50 focus:bg-white/5 transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20 hover:shadow-neon-blue font-heading font-bold tracking-wide transition-all uppercase text-sm flex items-center justify-center gap-2 group">
              Transmit Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}