export default function AgencyProjectCard({ p }: { p: any }) {
  return (
    <a href={p.link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className={`p-8 ${p.color} bg-[#111] hover:bg-[#161616] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg`}>
        <h4 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-purple-400">{p.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
      </div>
    </a>
  );
}