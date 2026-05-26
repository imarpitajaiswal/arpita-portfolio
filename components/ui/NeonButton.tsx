'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'purple' | 'blue' | 'ghost';
  href?: string;
  onClick?: () => void;
  download?: boolean;
}

export default function NeonButton({ children, variant = 'purple', href, onClick, download }: NeonButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-heading font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    purple: "text-white bg-primary/20 border border-primary hover:bg-primary/40 hover:shadow-neon-purple",
    blue: "text-white bg-secondary/20 border border-secondary hover:bg-secondary/40 hover:shadow-neon-blue",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent",
  };

  const ButtonContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant !== 'ghost' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      )}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} download={download} className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
}