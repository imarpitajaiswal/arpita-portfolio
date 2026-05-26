import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Insights from "../components/Insights";
import Certifications from "../components/Certifications";
import Chatbot from "../components/Chatbot";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Insights />
      <Certifications />
      <Chatbot />
      <Timeline />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="w-full text-center py-8 border-t border-white/5 mt-12 z-10">
        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
          Designed & Engineered by Arpita Jaiswal © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}