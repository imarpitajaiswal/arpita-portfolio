'use client';

import { motion, Variants } from 'framer-motion';

const skills = [
  { name: 'Agentic AI', color: 'primary' },
  { name: 'Python', color: 'secondary' },
  { name: 'LangChain', color: 'primary' },
  { name: 'OpenAI APIs', color: 'secondary' },
  { name: 'Next.js', color: 'primary' },
  { name: 'React.js', color: 'secondary' },
  { name: 'Machine Learning', color: 'primary' },
  { name: 'Hugging Face', color: 'secondary' },
  { name: 'Vector Databases', color: 'primary' },
  { name: 'FastAPI', color: 'secondary' },
  { name: 'Node.js', color: 'primary' },
  { name: 'AWS', color: 'secondary' },
  { name: 'Docker', color: 'primary' },
  { name: 'SQL', color: 'secondary' },
  { name: 'GitHub', color: 'primary' }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-[80vh] flex flex-col justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="font-heading text-secondary text-sm md:text-lg font-medium tracking-widest uppercase">
          // Neural Network Core
        </h2>
        <h3 className="font-heading text-4xl md:text-5xl font-bold text-white">
          Technical <span className="text-primary-glow">Arsenal</span>
        </h3>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`
              relative group flex items-center justify-center p-4 md:p-6 rounded-xl 
              bg-glass-bg backdrop-blur-md border border-white/5 overflow-hidden cursor-pointer
              transition-all duration-300
              ${skill.color === 'primary' ? 'hover:shadow-neon-purple hover:border-primary/50' : 'hover:shadow-neon-blue hover:border-secondary/50'}
            `}
          >
            {/* Animated Hover Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${skill.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
            
            <span className="relative z-10 font-body font-medium text-gray-300 group-hover:text-white transition-colors text-center text-sm md:text-base">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}