
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects, getAllNotes } from '../lib/content';
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import Badge from '../components/Badge';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'sqaxe1 | Portfolio';
  }, []);

  const featuredProjects = getAllProjects().slice(0, 2);
  const featuredNotes = getAllNotes().slice(0, 2);

  const techStack = [
    'React', 'TypeScript', 'Vite', 'Spring Boot', 'JPA', 
    'QueryDSL', 'MariaDB', 'JWT', 'Docker', 'Git'
  ];

  return (
    <div className="space-y-32 relative">
      <div className="hero-glow" />
      
      {/* Hero Section */}
      <section className="py-20 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-12">
        <div className="text-center sm:text-left flex-1">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-mono font-bold mb-6">
            WEB DEVELOPER & PROBLEM SOLVER
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-[1.2]">
            안녕하세요.<br />
            웹 개발자 한우주입니다.
          </h1>
          <p className="text-xl text-gray-500 max-w-xl mb-12 leading-relaxed mx-auto sm:mx-0">
            기능 구현부터 장애/권한 이슈 해결까지,<br />
            기록하며 성장합니다.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <Link
              to="/projects"
              className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-gray-200"
            >
              프로젝트 둘러보기
            </Link>
            <Link
              to="/about"
              className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              소개로 이동
            </Link>
          </div>
        </div>
        
        <div className="shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-10 rounded-full"></div>
            <img 
              src="/assets/profile.jpg" 
              alt="woojoo profile photo"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=WooJoo&background=111827&color=fff&size=140";
              }}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white/50 border border-gray-100 p-8 rounded-2xl">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8 text-center sm:text-left">Main Tech Stack</h2>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {techStack.map((tech) => (
            <span key={tech} className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-mono text-gray-600 hover:border-blue-400 hover:text-blue-600 cursor-default transition-all">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">주요 프로젝트</h2>
            <p className="text-gray-500 mt-2">최근에 진행한 핵심 케이스 스터디입니다.</p>
          </div>
          <Link to="/projects" className="text-sm font-bold text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
            전체 보기 &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
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
      </section>

      {/* Featured Notes */}
      <section>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">기술 기록</h2>
            <p className="text-gray-500 mt-2">문제 해결 과정과 학습한 내용을 공유합니다.</p>
          </div>
          <Link to="/notes" className="text-sm font-bold text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
            전체 기록 &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredNotes.map((note) => (
            <Card
              key={note.slug}
              title={note.title}
              summary={note.summary}
              date={note.date}
              tags={note.tags}
              link={`/notes/${note.slug}`}
              type="note"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
