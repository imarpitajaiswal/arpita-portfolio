export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-md z-50 border-b border-slate-200 py-4 px-6 flex justify-between items-center">
      <span className="font-bold text-xl tracking-tighter">AJ.</span>
      <div className="flex gap-6 text-sm font-medium">
        <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
        <a href="#experience" className="hover:text-purple-600 transition">Experience</a>
        <a href="/resume.pdf" className="bg-purple-600 text-white px-4 py-1.5 rounded-full hover:bg-purple-700 transition shadow-lg">Resume</a>
      </div>
    </nav>
  );
}