
import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';

interface ProjectCardProps {
  title: string;
  summary: string;
  image?: string;
  stack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, image, stack, link }) => {
  return (
    <Link to={link} className="group block">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 flex flex-col h-full">
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 border-b border-gray-100">
          <img 
            src={image || `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=f1f5f9&color=64748b&size=512&bold=true`} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(title)}&background=f1f5f9&color=64748b&size=512&bold=true`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.slice(0, 3).map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
            {stack.length > 3 && <span className="text-[10px] text-gray-400 font-mono">+{stack.length - 3}</span>}
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {summary}
          </p>
          <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            자세히 보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
