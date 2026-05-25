// app/components/Experience.tsx
export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">Professional Development</h2>
      
      <div className="space-y-8 border-l-2 border-purple-200 ml-3 md:ml-0">
        
        {/* Certification */}
        <div className="relative pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-600"></div>
          <h3 className="text-xl font-bold">SAP Certified | Autonomous Enterprise</h3>
          <p className="text-purple-600 font-medium">May 2026</p>
          <p className="text-gray-600 mt-2">Completed deep-dive certification on the SAP Learning platform, mastering enterprise automation and system architecture.</p>
        </div>

        {/* Technical Research */}
        <div className="relative pl-8">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-600"></div>
          <h3 className="text-xl font-bold">Research & Development | University of Delhi</h3>
          <p className="text-purple-600 font-medium">2024</p>
          <p className="text-gray-600 mt-2">Specialized project work focused on data migration and backend examination systems, building a foundation in scalable architecture.</p>
        </div>

        {/* Engineering Note */}
        <div className="relative pl-8 mt-12 bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
          <h3 className="text-lg font-bold text-purple-700 mb-2 italic">Engineering Note: DocuMind</h3>
          <p className="text-gray-600 text-sm">
            <strong>The Hurdle:</strong> Managing vector indexing latency in RAG architectures.
            <br />
            <strong>The Technical Trade-off:</strong> Evaluated FAISS vs. ChromaDB; opted for ChromaDB to prioritize maintainability and persistence.
            <br />
            <strong>The Solution:</strong> Implemented a tiered caching strategy and optimized chunking logic, resulting in a 30% reduction in query response time.
          </p>
        </div>

      </div>
    </section>
  );
}