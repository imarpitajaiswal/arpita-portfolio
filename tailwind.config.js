/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        foreground: '#F9FAFB',
        primary: {
          DEFAULT: '#A855F7',
          glow: '#C084FC',
        },
        secondary: {
          DEFAULT: '#3B82F6',
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