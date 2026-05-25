export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Arpita Jaiswal</h1>
      <h2 className="text-2xl text-purple-600 mb-6">AI/ML Engineer & Software Developer</h2>
      <p className="max-w-2xl text-gray-600 mb-8">
        Bridging the gap between academic research and production-ready enterprise applications.
      </p>
      <div className="flex gap-4">
        <a href="/resume.pdf" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">Download Resume</a>
        <a href="https://github.com/imarpitajaiswal" className="border border-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition">GitHub</a>
      </div>
    </section>
  );
}