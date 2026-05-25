// app/components/ProjectCard.tsx

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-gray-200 p-6 rounded-xl transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:-translate-y-2 bg-white flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tags section */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium group-hover:bg-purple-100 group-hover:text-purple-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project link */}
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
        >
          View Repository →
        </a>
      </div>
    </div>
  );
}