'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-white/5">
      
      <div className="flex flex-col md:flex-row gap-12 md:gap-24">
        
        {/* Left Column: Minimalist Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:w-1/3 flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-gray-500" />
            <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase">
              Engineering Philosophy
            </h2>
          </div>
          <h3 className="text-3xl font-semibold text-white tracking-tight mt-2">
            Building systems that <span className="text-gray-500 italic">reason</span> and scale.
          </h3>
        </motion.div>

        {/* Right Column: Authoritative Prose & Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-2/3 max-w-2xl font-body space-y-8"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-400">
            I am an <strong className="text-gray-200 font-medium">AI Engineer and Full Stack Developer</strong> with a Master of Computer Applications. I specialize in bridging the gap between foundational LLM research and production-grade web architectures. 
          </p>

          <div className="space-y-4">
            <p className="text-lg md:text-xl leading-relaxed text-gray-400">My core focus areas include:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">▹</span>
                <span><strong className="text-white">Agentic Workflows:</strong> Orchestrating multi-agent systems for autonomous task execution and complex reasoning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">▹</span>
                <span><strong className="text-white">RAG Infrastructure:</strong> Designing low-latency retrieval systems utilizing advanced vector embeddings to guarantee zero-hallucination outputs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1">▹</span>
                <span><strong className="text-white">Scalable Full Stack:</strong> Building high-throughput Node.js/Next.js backends capable of processing complex data at scale.</span>
              </li>
            </ul>
          </div>

          {/* Hard Metrics */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-white/5">
             <div className="flex flex-col">
                <span className="text-3xl font-semibold text-white tracking-tight">500+</span>
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mt-1">Tx/sec Processed</span>
             </div>
             <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col">
                <span className="text-3xl font-semibold text-white tracking-tight">99.9%</span>
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mt-1">Data Integrity</span>
             </div>
             <div className="hidden sm:block w-[1px] h-12 bg-white/10" />
             <div className="flex flex-col">
                <span className="text-3xl font-semibold text-white tracking-tight">0</span>
                <span className="text-sm font-mono text-gray-500 uppercase tracking-wider mt-1">Hallucinations</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}