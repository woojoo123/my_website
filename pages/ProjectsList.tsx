
import React, { useEffect } from 'react';
import { getAllProjects } from '../lib/content';
import ProjectCard from '../components/ProjectCard';

const ProjectsList: React.FC = () => {
  useEffect(() => {
    document.title = '프로젝트 | Portfolio';
  }, []);

  const projects = getAllProjects();

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl font-black mb-4 text-gray-900 tracking-tight">프로젝트</h1>
        <p className="text-gray-600">직접 설계하고 개발하며 마주한 기술적 도전들을 기록합니다.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            stack={project.stack}
            image={project.image}
            link={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
