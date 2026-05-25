"use client"; // This is crucial for interactive React components
import { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ["AI/ML Engineer", "Software Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4 pt-20">
      <h1 className="text-5xl font-bold mb-4 text-slate-900">Hi, I'm Arpita Jaiswal</h1>
      
      {/* The Dynamic Role Text */}
      <div className="h-12 flex items-center justify-center">
        <h2 className="text-3xl text-purple-600 font-mono font-semibold transition-opacity duration-500">
          {roles[index]}
        </h2>
      </div>

      <p className="max-w-2xl text-slate-600 mb-8 text-lg mt-4">
        Bridging the gap between academic research and production-ready enterprise applications.
      </p>

      <div className="flex gap-4">
        <a href="/resume.pdf" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">Download Resume</a>
        <a href="https://github.com/imarpitajaiswal" className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition">GitHub</a>
      </div>
    </section>
  );
}