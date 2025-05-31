import React from 'react';
import projects from '../../data/projects';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface ProjectContentProps {
  projectId: string;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ projectId }) => {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="h-full flex flex-col ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{project.name}</h2>
        <div className="flex space-x-2">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">{project.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3 text-gray-800">Screenshots</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto flex-1">
        {project.screenshots.map((screenshot, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={screenshot} 
              alt={`${project.name} screenshot ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;