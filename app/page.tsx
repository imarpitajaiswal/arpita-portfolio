import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    // bg-slate-50 provides a professional, clean, off-white background
    // text-slate-900 ensures all text is clearly readable
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <Hero />
      
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-sm border border-gray-100 mt-12">
        <h2 className="text-2xl font-bold mb-4">Current Research Lab</h2>
        <div className="flex items-center gap-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-gray-600">Building a custom RAG evaluation pipeline for document accuracy.</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}