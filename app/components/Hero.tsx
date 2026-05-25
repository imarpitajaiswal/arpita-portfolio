"use client"; // Required for interactivity
import { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ["AI/ML Engineer", "Software Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-6xl font-bold mb-4">Hi, I'm Arpita Jaiswal</h1>
      <h2 className="text-3xl text-purple-600 mb-6 font-mono">
        {roles[index]}
      </h2>
      {/* ... rest of your hero content */}
    </section>
  );
}