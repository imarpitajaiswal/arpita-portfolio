'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex items-center justify-center">
      
      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      {/* Floating Neon Dots */}
      <motion.div 
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full shadow-neon-purple hidden md:block" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.3, 0.8, 0.3] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
        className="absolute bottom-1/4 right-10 w-2 h-2 bg-secondary rounded-full shadow-neon-blue hidden md:block" 
      />

      <div className="w-full max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden bg-glass-bg backdrop-blur-xl border border-glass-border shadow-glass hover:border-primary/30 transition-colors duration-500"
        >
          {/* Mac/Terminal Header UI - Clean Version */}
          <div className="flex items-center px-6 py-4 bg-black/60 border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
          </div>

          {/* Terminal Body Content */}
          <div className="p-8 md:p-12 font-body text-gray-300 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-secondary mt-1 font-mono">❯</span>
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="text-primary-glow font-semibold text-white tracking-wide">Initialize AI_Engineer.exe...</span>
                <br /><br />
                I am an <span className="text-white font-medium">AI Engineer and Full Stack Developer</span> obsessed with building the future. My expertise lies at the intersection of scalable web architectures and intelligent systems, specifically focusing on <span className="text-secondary-glow text-white font-medium">Agentic AI</span> and modern LLM integrations.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-secondary mt-1 font-mono">❯</span>
              <p className="text-lg md:text-xl leading-relaxed">
                Whether I am architecting hallucination-free RAG pipelines, deploying autonomous AI agents, or building high-performance financial trackers, I don't just write code—I engineer solutions that <span className="italic text-white">think</span>, <span className="italic text-white">adapt</span>, and <span className="italic text-white">scale</span>
              </p>
            </div>

            {/* Blinking Cursor */}
            <div className="flex items-center gap-4 animate-pulse pt-2">
              <span className="text-primary font-mono">❯</span>
              <span className="w-3 h-6 bg-primary/80 block rounded-sm shadow-neon-purple" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}