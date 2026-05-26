export default function AgencyProjectCard({ p }: { p: any }) {
  return (
    <div className={`p-8 border-l-4 ${p.color} bg-[#111] hover:bg-[#161616] transition-all duration-300 transform hover:-translate-y-2`}>
      <h4 className="text-xl font-bold mb-4 tracking-tight">{p.title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
    </div>
  );
}