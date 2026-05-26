'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaCode } from 'react-icons/fa';

const timelineData = [
  {
    year: "2026 - Present",
    title: "Senior AI Engineer",
    organization: "Tech Innovators Inc.",
    description: "Architecting autonomous Agentic AI workflows and integrating scalable LLM solutions for enterprise clients. Leading a team of ML engineers.",
    icon: FaBriefcase,
    color: "primary"
  },
  {
    year: "2024 - 2026",
    title: "Full Stack Developer",
    organization: "Quantum Data Systems",
    description: "Built scalable web architectures using Next.js, Node.js, and AWS. Deployed machine learning models via highly optimized FastAPI microservices.",
    icon: FaCode,
    color: "secondary"
  },
  {
    year: "2024",
    title: "Master of Computer Applications",
    organization: "Institute of Technology",
    description: "Graduated with honors. Specialized in Artificial Intelligence, Data Structures, and Advanced Algorithm Design.",
    icon: FaGraduationCap,
    color: "primary"
  },
  {
    year: "2023",
    title: "National AI Hackathon Winner",
    organization: "AI for Good Initiative",
    description: "Developed a predictive analytics model for renewable energy optimization, winning 1st place among 500+ competing teams.",
    icon: FaTrophy,
    color: "secondary"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-screen">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 space-y-4"
      >
        <h2 className="font-heading text-secondary text-sm md:text-lg font-medium tracking-widest uppercase">
          // Career Trajectory
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          My <span className="text-secondary-glow">Journey</span>
        </h3>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Glowing Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </div>

        {/* Timeline Events */}
        <div className="space-y-12 md:space-y-24">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center justify-between w-full md:justify-normal ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Glowing Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`
                    absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-[#050816] flex items-center justify-center
                    -translate-x-1/2 z-10 border-2 
                    ${item.color === 'primary' ? 'border-primary text-primary shadow-neon-purple' : 'border-secondary text-secondary shadow-neon-blue'}
                  `}
                >
                  <item.icon size={16} />
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    w-[calc(100%-60px)] ml-[60px] md:ml-0 md:w-[45%] p-6 md:p-8 rounded-2xl
                    bg-glass-bg backdrop-blur-xl border border-glass-border shadow-glass transition-all duration-300
                    ${item.color === 'primary' ? 'hover:shadow-neon-purple hover:border-primary/30' : 'hover:shadow-neon-blue hover:border-secondary/30'}
                  `}
                >
                  <span className={`inline-block mb-3 font-mono text-sm tracking-widest ${item.color === 'primary' ? 'text-primary-glow' : 'text-secondary-glow'}`}>
                    {item.year}
                  </span>
                  <h4 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <h5 className="font-heading text-sm md:text-base text-gray-300 mb-4 font-medium uppercase tracking-wide">
                    {item.organization}
                  </h5>
                  <p className="font-body text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}