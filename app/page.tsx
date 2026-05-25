import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Hero />
      
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Featured Projects</h2>
        
        {/* This grid will automatically show your projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}