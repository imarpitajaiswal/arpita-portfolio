import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <Hero />
      <About />
    </div>
  );
}