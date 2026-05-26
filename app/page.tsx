import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}