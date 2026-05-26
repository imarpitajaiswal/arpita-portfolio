export default function Portfolio() {
  const projects = [
    { title: "DocuMind", desc: "S: High halluncination rates. T: Reduce latency. A: RAG + ChromaDB. R: 30% speed boost.", color: "accent-1" },
    { title: "Expense Tracker", desc: "S: Disorganized data. T: Real-time tracking. A: React Context API. R: Clean insights.", color: "accent-2" },
    { title: "Portfolio V2", desc: "S: Outdated branding. T: Modernize. A: Next.js + Tailwind. R: Agency-tier UX.", color: "accent-3" }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Navbar */}
      <nav className="flex justify-between py-8 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-50">
        <h1 className="font-bold text-xl">AJ.</h1>
        <div className="space-x-8 font-light text-sm">
          {["About", "Projects", "Certifications"].map(item => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
          <a href="#footer" className="border border-white px-4 py-2 hover:bg-white hover:text-black transition">Contact Me</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="h-[60vh] flex flex-col justify-center">
        <h1 className="text-7xl font-bold mb-4">Arpita Jaiswal</h1>
        <h2 className="text-2xl text-gray-400 font-light">Data Analyst | Turning Complex Data into Actionable Strategy.</h2>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-800">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6">About</h3>
        <p className="text-2xl font-light leading-relaxed max-w-3xl">
          I bridge the gap between raw data and business impact. By combining <strong>Python, SQL, and PowerBI</strong> with a strategic mindset, I transform technical bottlenecks into scalable business solutions.
        </p>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className={`p-8 border-l-4 ${p.color} bg-[#111] hover:scale-105 transition-transform`}>
              <h4 className="text-xl font-bold mb-4">{p.title}</h4>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications (Grid) */}
      <section id="certifications" className="py-20">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-10">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-6 border border-gray-800">SAP Certified: Autonomous Enterprise</div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-20 border-t border-gray-800 flex justify-between items-center">
        <a href="/resume.pdf" className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition">Download Resume</a>
        <div className="space-x-6 text-gray-400">
          <a href="https://github.com/imarpitajaiswal">GitHub</a>
          <a href="https://www.linkedin.com/imarpitajaiswal/">LinkedIn</a>
          <a href="mailto:arpita@example.com">Email</a>
        </div>
      </footer>
    </main>
  );
}