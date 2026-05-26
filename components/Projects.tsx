'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaBrain, FaFileAlt, FaServer, FaChartLine, FaCogs } from 'react-icons/fa';

const projects = [
  {
    title: "DocuMind (RAG Architecture)",
    description: "Engineered a production-ready RAG pipeline utilizing FAISS indexing and semantic chunking. Implemented a cross-encoder re-ranking step to achieve high retrieval accuracy and mitigate LLM hallucinations on proprietary datasets.",
    tech: ["Python", "FAISS", "LangChain", "OpenAI API"],
    github: "https://github.com/imarpitajaiswal/DocuMind",
    live: "https://github.com/imarpitajaiswal/DocuMind",
    Visual: () => (
      <div className="flex items-center justify-center w-full h-full gap-2 text-gray-500">
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><FaFileAlt /></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">Docs</span>
        </div>
        <div className="w-8 h-[1px] border-t border-dashed border-gray-600 relative">
           <motion.div animate={{ x: [0, 32] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute -top-[2px] left-0 w-1 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><FaDatabase /></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">Vector</span>
        </div>
        <div className="w-8 h-[1px] border-t border-dashed border-gray-600 relative">
           <motion.div animate={{ x: [0, 32] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} className="absolute -top-[2px] left-0 w-1 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><FaBrain /></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">LLM</span>
        </div>
      </div>
    )
  },
  {
    title: "SkillMatch-AI Engine",
    description: "Developed a semantic NLP screening engine. Transitioned from legacy heuristics to dense vector embeddings (SentenceTransformers) with Cosine Similarity, significantly improving matching precision across edge-case job descriptions.",
    tech: ["FastAPI", "Transformers", "Python", "Vector Math"],
    github: "https://github.com/imarpitajaiswal/SkillMatch-AI",
    live: "https://github.com/imarpitajaiswal/SkillMatch-AI",
    Visual: () => (
      <div className="flex items-center justify-center w-full h-full gap-3 text-gray-500">
        <div className="flex flex-col gap-2 z-10">
          <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px]"><FaFileAlt /></div>
          <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px]"><FaFileAlt /></div>
        </div>
        <div className="w-6 h-[1px] border-t border-dashed border-gray-600 relative">
           <motion.div animate={{ x: [0, 24] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} className="absolute -top-[2px] left-0 w-1 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"><FaCogs className="animate-[spin_4s_linear_infinite]" /></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">Embed</span>
        </div>
        <div className="w-6 h-[1px] border-t border-dashed border-gray-600 relative">
           <motion.div animate={{ x: [0, 24] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear", delay: 0.6 }} className="absolute -top-[2px] left-0 w-1 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs text-white">0.92</div>
          <span className="text-[9px] font-mono uppercase tracking-widest">Score</span>
        </div>
      </div>
    )
  },
  {
    title: "Smart-Expense Pipeline",
    description: "Architected a high-throughput financial data pipeline using Node.js asynchronous event loops. Optimized backend API response times to <50ms for concurrent transactional inserts and real-time dashboard aggregations.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/imarpitajaiswal/Smart-Expense-Tracker",
    live: "https://github.com/imarpitajaiswal/Smart-Expense-Tracker",
    Visual: () => (
      <div className="flex items-center justify-center w-full h-full gap-2 text-gray-500">
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><span className="text-xs text-white">$</span></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">Input</span>
        </div>
        <div className="w-8 h-[1px] border-t border-dashed border-gray-600 relative">
           <motion.div animate={{ x: [0, 32] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute -top-[2px] left-0 w-1 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center"><FaServer /></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">API</span>
        </div>
        <div className="w-8 h-[1px] border-t border-dashed border-gray-600 relative">
           <motion.div animate={{ x: [0, 32] }} transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 0.5 }} className="absolute -top-[2px] left-0 w-1 h-1 rounded-full bg-gray-300" />
        </div>
        <div className="flex flex-col items-center gap-1 z-10">
          <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white"><FaChartLine /></div>
          <span className="text-[9px] font-mono uppercase tracking-widest">UI</span>
        </div>
      </div>
    )
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
            {/* Real Architecture Diagram Header */}
            <div className="relative w-full h-48 bg-[#111111] border-b border-white/5 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <project.Visual />
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 border border-white/5 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>

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