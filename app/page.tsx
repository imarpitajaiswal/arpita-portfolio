import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-16">
      <Navbar />
      <Hero />
      
      <section id="projects" className="max-w-4xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <div id="experience">
        <TechStack />
        <Experience />
      </div>
      
      <Footer />
    </main>
  );
}