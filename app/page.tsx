"use client";
import { useEffect, useState } from "react";
import AgencyProjectCard from "./components/AgencyProjectCard";
import { projects } from "../data/projects";

export default function Portfolio() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setShowTopBtn(window.scrollY > 500));
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Sticky Navbar */}
      <nav className="flex justify-between py-8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <h1 className="font-bold text-xl tracking-tighter">ARPITA JAISWAL</h1>
        <div className="space-x-8 font-light text-xs uppercase tracking-widest">
          {["About", "Projects", "Certifications"].map(item => (
            <a href={`#${item.toLowerCase()}`} key={item} className="hover:text-purple-400 transition">{item}</a>
          ))}
          <a href="#footer" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition">Contact Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-[70vh] flex flex-col justify-center border-b border-gray-800">
        <h1 className="text-8xl font-bold mb-6 tracking-tighter">Arpita Jaiswal</h1>
        <h2 className="text-2xl text-gray-400 font-light max-w-2xl">Data Analyst | Turning Complex Data into Actionable Strategy.</h2>
      </header>

      {/* About */}
      <section id="about" className="py-24">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">About</h3>
        <p className="text-3xl font-light leading-snug max-w-3xl">
          I bridge the gap between raw data and business impact. By combining <strong>Python, SQL, and PowerBI</strong> with a strategic mindset, I transform technical bottlenecks into scalable business solutions.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 border-t border-gray-800">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-10">Featured Work</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => <AgencyProjectCard key={i} p={p} />)}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 border-t border-gray-800">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-10">Professional Badges</h3>
        <div className="bg-[#111] p-8 border border-gray-800 flex items-center justify-between">
            <span className="font-bold text-lg">SAP Certified: Autonomous Enterprise</span>
            <span className="text-gray-500 text-sm italic">Verified May 2026</span>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-24 border-t border-gray-800 flex justify-between items-center">
        <a href="/resume.pdf" className="bg-white text-black px-10 py-4 font-bold hover:bg-gray-200 transition">Download Resume</a>
        <div className="flex gap-8 text-gray-400 font-light text-sm">
          <a href="https://github.com/imarpitajaiswal" target="_blank">GITHUB</a>
          <a href="https://www.linkedin.com/in/imarpitajaiswal/" target="_blank">LINKEDIN</a>
          <a href="mailto:arpita.jaiswal@example.com">EMAIL</a>
        </div>
      </footer>

      {showTopBtn && (
        <button onClick={() => window.scrollTo(0,0)} className="fixed bottom-10 right-10 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition">↑</button>
      )}
    </main>
  );
}