"use client";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setShowTopBtn(window.scrollY > 500));
  }, []);

  const projects = [
    { title: "DocuMind", desc: "S: High hallucination rates. T: Reduce latency. A: RAG + ChromaDB. R: 30% speed boost.", color: "accent-1" },
    { title: "Expense Tracker", desc: "S: Disorganized data. T: Real-time tracking. A: React Context API. R: Clean insights.", color: "accent-2" },
    { title: "Portfolio V2", desc: "S: Outdated branding. T: Modernize. A: Next.js + Tailwind. R: Agency-tier UX.", color: "accent-3" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <nav className="flex justify-between py-8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-50">
        <h1 className="font-bold text-xl">AJ.</h1>
        <div className="space-x-8 font-light text-sm">
          {["About", "Projects"].map(item => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
          <a href="#footer" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition">Contact Me</a>
        </div>
      </nav>

      <header className="h-[60vh] flex flex-col justify-center">
        <h1 className="text-7xl font-bold mb-4">Arpita Jaiswal</h1>
        <h2 className="text-2xl text-gray-400 font-light">Data Analyst | Turning Complex Data into Actionable Strategy.</h2>
      </header>

      <section id="about" className="py-20 border-t border-gray-800">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">About</h3>
        <p className="text-2xl font-light leading-relaxed max-w-3xl">
          I bridge the gap between raw data and business impact. By combining <strong>Python, SQL, and PowerBI</strong>, I transform technical bottlenecks into scalable business solutions.
        </p>
      </section>

      <section id="projects" className="py-20 border-t border-gray-800">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className={`p-8 border-l-4 ${p.color} bg-[#111] hover:scale-105 transition-transform duration-300`}>
              <h4 className="text-xl font-bold mb-4">{p.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="footer" className="py-20 border-t border-gray-800 flex justify-between items-center">
        <a href="/resume.pdf" className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition">Download Resume</a>
        <div className="space-x-6 text-gray-400">
          <a href="https://github.com/imarpitajaiswal">GitHub</a>
          <a href="https://www.linkedin.com/imarpitajaiswal/">LinkedIn</a>
        </div>
      </footer>

      {showTopBtn && (
        <button onClick={() => window.scrollTo(0,0)} className="fixed bottom-10 right-10 bg-white text-black p-4 rounded-full shadow-lg">↑</button>
      )}
    </main>
  );
}