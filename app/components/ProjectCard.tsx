// app/components/ProjectCard.tsx

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      {/* Tags section for technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Project link */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-purple-600 font-semibold hover:underline text-sm"
      >
        View Repository →
      </a>
    </div>
  );
}