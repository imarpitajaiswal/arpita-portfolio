"use client";
import { useEffect, useState } from "react";
import AgencyProjectCard from "./components/AgencyProjectCard";

const projects = [
  { title: "DocuMind", desc: "S: High hallucination rates. T: Reduce latency. A: RAG + ChromaDB. R: 30% speed boost.", color: "accent-1", link: "https://github.com/imarpitajaiswal/documind" },
  { title: "Expense Tracker", desc: "S: Disorganized data. T: Real-time tracking. A: React Context API. R: Clean insights.", color: "accent-2", link: "https://github.com/imarpitajaiswal/expense-tracker-program" },
  { title: "Portfolio V2", desc: "S: Outdated branding. T: Modernize. A: Next.js + Tailwind. R: Agency-tier UX.", color: "accent-3", link: "https://github.com/imarpitajaiswal/arpita-portfolio" }
];

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16 text-[#ededed]">
      {/* Navbar - Fixed the crowding */}
      <nav className="flex justify-between items-center py-6 mb-20 border-b border-gray-900">
        <h1 className="font-bold text-lg tracking-widest">ARPITA JAISWAL</h1>
        <div className="flex gap-8 font-light text-xs uppercase tracking-widest">
          {["About", "Projects"].map(item => <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-purple-400 transition">{item}</a>)}
          <a href="#footer" className="border border-white px-4 py-1 hover:bg-white hover:text-black transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section - Single Source of Truth */}
      <header className="mb-32">
        <h1 className="text-8xl font-bold mb-8 tracking-tighter leading-tight">Data Analyst.<br/>Turning Data into Strategy.</h1>
        <p className="text-2xl text-gray-400 font-light max-w-2xl">Building intelligent systems that bridge technical expertise with business value.</p>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-900">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">About</h3>
        <p className="text-3xl font-light leading-relaxed max-w-3xl">I bridge the gap between raw data and business impact. By combining <strong>Python, SQL, and PowerBI</strong> with a strategic mindset, I transform technical bottlenecks into scalable business solutions.</p>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 border-t border-gray-900">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-12">Featured Work</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => <AgencyProjectCard key={i} p={p} />)}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-20 border-t border-gray-900 flex justify-between items-center text-xs uppercase tracking-widest">
        <a href="/resume.pdf" className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition">Download Resume</a>
        <div className="flex gap-8 text-gray-500">
          <a href="https://github.com/imarpitajaiswal" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/imarpitajaiswal/" target="_blank">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}