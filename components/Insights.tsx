'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';

const insights = [
  {
    title: "Optimizing Vector Search Latency in Multi-Tenant RAG Pipelines",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Architecture",
    excerpt: "An analysis of indexing strategies using FAISS and HNSW to reduce semantic search latency by 40% while maintaining strict data isolation in multi-tenant environments.",
    link: "https://medium.com/@imarpitajaiswal" // Replace with actual link later
  },
  {
    title: "Architecting Fault-Tolerant LLM Agents with LangGraph",
    date: "April 28, 2026",
    readTime: "12 min read",
    category: "Agentic AI",
    excerpt: "Exploring stateful, cyclical graph architectures to seamlessly handle LLM API failures, rate limits, and contextual hallucination recovery in production systems.",
    link: "https://medium.com/@imarpitajaiswal" // Replace with actual link later
  }
];

export default function Insights() {
  return (
    <section id="insights" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 space-y-3 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-sm font-mono tracking-widest text-gray-500 uppercase">
            Technical Writing
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-3">
            Engineering Insights
          </h3>
        </div>
        <a 
          href="https://medium.com/@imarpitajaiswal" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          View all articles <FaArrowRight className="text-xs" />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {insights.map((article, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between h-full p-8 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors duration-300"
          >
            <div>
              {/* Meta Data */}
              <div className="flex items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">
                <span className="flex items-center gap-2 text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  <FaBookOpen /> {article.category}
                </span>
                <time>{article.date}</time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              {/* Title & Excerpt */}
              <h4 className="text-2xl font-semibold text-white mb-4 tracking-tight group-hover:text-gray-200 transition-colors">
                {article.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {article.excerpt}
              </p>
            </div>

            {/* Read Link */}
            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white mt-auto w-max"
            >
              Read Case Study 
              <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}