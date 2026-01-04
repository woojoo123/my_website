
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getProjectBySlug } from '../lib/content';
import Badge from '../components/Badge';
import NotFound from './NotFound';
import '../styles/markdown.css';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.meta.title} | Projects`;
    }
  }, [project]);

  if (!project) return <NotFound />;

  const { meta, content } = project;

  return (
    <article className="max-w-3xl">
      <Link to="/projects" className="text-sm text-gray-500 hover:text-blue-600 mb-8 inline-block font-semibold">
        &larr; 프로젝트 목록으로
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">{meta.title}</h1>
        <div className="flex flex-wrap items-center gap-y-2 mb-6 text-sm text-gray-600">
          <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-700">{meta.period}</span>
          <span className="mx-3 text-gray-200">/</span>
          <span className="font-medium text-gray-500">{meta.role}</span>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {meta.stack.map(tag => <Badge key={tag}>{tag}</Badge>)}
        </div>
      </header>

      {(meta.links?.backend || meta.links?.frontend || meta.links?.github || meta.links?.demo) && (
        <div className="mb-12">
          <div className="flex gap-4">
            {meta.links?.backend && (
              <a 
                href={meta.links.backend} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
              >
                GitHub 저장소
              </a>
            )}
            {meta.links?.frontend && (
              <a 
                href={meta.links.frontend} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold border border-blue-200 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-colors"
              >
                라이브 데모
              </a>
            )}
            {meta.links?.github && (
              <a 
                href={meta.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
              >
                GitHub 저장소
              </a>
            )}
            {meta.links?.demo && (
              <a 
                href={meta.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold border border-blue-200 bg-blue-50 text-blue-700 px-5 py-2.5 rounded-xl hover:bg-blue-100 transition-colors"
              >
                라이브 데모
              </a>
            )}
          </div>
        </div>
      )}

      <div className="md">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default ProjectDetail;
