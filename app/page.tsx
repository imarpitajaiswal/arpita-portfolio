"use client";
import AgencyProjectCard from "./components/AgencyProjectCard";

const projects = [
  { title: "DocuMind (AI/ML)", desc: "S: High hallucination in docs. T: Build accurate query system. A: RAG + ChromaDB. R: 30% latency reduction.", color: "accent-1", link: "https://github.com/imarpitajaiswal/documind" },
  { title: "Expense Tracker", desc: "S: Manual finance tracking. T: Automate and visualize. A: React Context API. R: Scalable tracking tool.", color: "accent-2", link: "https://github.com/imarpitajaiswal/expense-tracker-program" },
  { title: "Portfolio V2", desc: "S: Outdated brand. T: Modernize. A: Next.js + Tailwind. R: Agency-tier UX/UI.", color: "accent-3", link: "https://github.com/imarpitajaiswal/arpita-portfolio" }
];

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-16 bg-[#0a0a0a] min-h-screen text-[#ededed]">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 mb-20 border-b border-gray-900">
        <h1 className="font-bold text-lg tracking-widest">ARPITA JAISWAL</h1>
        <div className="flex gap-8 font-light text-xs uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#footer" className="border border-gray-700 px-4 py-1 hover:border-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mb-32">
        <h1 className="text-7xl font-bold mb-8 tracking-tighter leading-tight">AI/ML Engineer.<br/>Turning Data into Strategy.</h1>
        <p className="text-2xl text-gray-400 font-light max-w-2xl">Building intelligent systems that bridge technical expertise with business value.</p>
      </header>

      {/* About */}
      <section id="about" className="py-20 border-t border-gray-900">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">About</h3>
        <p className="text-3xl font-light leading-relaxed max-w-3xl">I am an AI/ML Engineer who bridges the gap between raw data and business impact. By combining deep learning architectures with scalable backends, I transform technical bottlenecks into intelligent solutions.</p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 border-t border-gray-900">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-12">Featured Work</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => <AgencyProjectCard key={i} p={p} />)}
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-20 border-t border-gray-900 flex justify-between items-center text-xs uppercase tracking-widest text-gray-500">
        <a href="/resume.pdf" className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition">Download Resume</a>
        <div className="flex gap-8">
          <a href="https://github.com/imarpitajaiswal" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/imarpitajaiswal/" target="_blank" className="hover:text-white transition">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}