
import React, { useEffect } from 'react';

const Resume: React.FC = () => {
  useEffect(() => {
    document.title = '이력서 | MySite';
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-12">이력서</h1>
      
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">자기소개</h2>
        <p className="text-gray-700 leading-relaxed">
          React와 Spring Boot에 깊은 전문성을 가진 세밀한 풀스택 개발자입니다. 
          성능이 뛰어나고 유지보수가 용이한 코드베이스를 구축하고 복잡한 엔지니어링 과제를 해결하는 데 집중합니다. 
          개발자 생산성과 시스템 설계에 열정을 가지고 있습니다.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">기술 스택</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-3">프런트엔드</h3>
            <ul className="text-gray-600 space-y-1">
              <li>React, TypeScript</li>
              <li>Next.js, Vite</li>
              <li>Tailwind CSS, Styled Components</li>
              <li>Zustand, Redux Toolkit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3">백엔드</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Java, Spring Boot</li>
              <li>JPA / Hibernate, QueryDSL</li>
              <li>Spring Security, JWT</li>
              <li>Node.js, Express</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3">데이터베이스 & DevOps</h3>
            <ul className="text-gray-600 space-y-1">
              <li>MariaDB, MySQL, PostgreSQL</li>
              <li>Redis (Caching)</li>
              <li>Docker, Docker Compose</li>
              <li>AWS (EC2, S3, RDS)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3">도구</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Git / GitHub</li>
              <li>IntelliJ IDEA, VS Code</li>
              <li>Postman, Swagger</li>
              <li>Slack, Jira</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">학력</h2>
        <div>
          <h3 className="font-bold text-gray-900">컴퓨터공학 전공</h3>
          <p className="text-gray-600">대학교 이름 • 2018 - 2022</p>
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg text-center">
        <p className="text-gray-600 mb-4 font-medium">상세한 PDF 버전이 필요하신가요?</p>
        <button 
          onClick={() => alert('PDF 링크 준비 중입니다.')}
          className="bg-gray-900 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-all"
        >
          PDF 이력서 다운로드
        </button>
      </div>
    </div>
  );
};

export default Resume;
