export default function TechStack() {
  const skills = ["Python", "Next.js", "LangChain", "FastAPI", "SAP", "ChromaDB", "Tailwind CSS"];
  
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h3 className="text-xl font-semibold mb-6 text-center text-slate-800">My Engineering Stack</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm text-slate-700 font-medium hover:border-purple-500 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}