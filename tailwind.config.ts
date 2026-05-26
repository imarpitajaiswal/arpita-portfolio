import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816', // Deep space navy/black
        foreground: '#F9FAFB',
        primary: {
          DEFAULT: '#A855F7', // Neon Purple
          glow: '#C084FC',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Neon Blue
          glow: '#60A5FA',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 15px 2px rgba(168, 85, 247, 0.4)',
        'neon-blue': '0 0 15px 2px rgba(59, 130, 246, 0.4)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;