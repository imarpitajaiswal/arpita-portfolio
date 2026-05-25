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
      
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}