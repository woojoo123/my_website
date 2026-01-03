
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    document.title = '소개 | Portfolio';
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-black text-gray-900 mb-12">소개</h1>
      
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">안녕하세요, 한우주입니다.</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            React와 Spring Boot에 깊은 관심을 가진 풀스택 개발자입니다. 
            단순히 기능을 만드는 것을 넘어, 시스템의 안정성과 유지보수성을 고민하는 과정을 즐깁니다.
          </p>
          <p>
            특히 개발 과정에서 마주치는 복잡한 권한 이슈나 인프라 장애를 해결하고 기록하는 것에 가치를 둡니다. 
            기술적인 문제 해결을 통해 동료들과 사용자들에게 더 나은 가치를 전달하고자 합니다.
          </p>
          <p>
            깨끗한 코드와 뛰어난 사용자 경험의 조화를 지향하며, 항상 '왜?'라는 질문을 던지며 근본적인 원인을 파악하려 노력합니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">기술 스택</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              프런트엔드
            </h3>
            <ul className="text-gray-600 space-y-1 ml-3.5 border-l border-gray-100 pl-4">
              <li>React, TypeScript</li>
              <li>Next.js, Vite</li>
              <li>Tailwind CSS, Styled Components</li>
              <li>Zustand, Redux Toolkit</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              백엔드
            </h3>
            <ul className="text-gray-600 space-y-1 ml-3.5 border-l border-gray-100 pl-4">
              <li>Java, Spring Boot</li>
              <li>JPA / Hibernate, QueryDSL</li>
              <li>Spring Security, JWT</li>
              <li>Node.js, Express</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
              인프라 & DB
            </h3>
            <ul className="text-gray-600 space-y-1 ml-3.5 border-l border-gray-100 pl-4">
              <li>MariaDB, MySQL, PostgreSQL</li>
              <li>Redis (Caching)</li>
              <li>Docker, Docker Compose</li>
              <li>AWS (EC2, S3, RDS)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              도구 & 협업
            </h3>
            <ul className="text-gray-600 space-y-1 ml-3.5 border-l border-gray-100 pl-4">
              <li>Git / GitHub</li>
              <li>IntelliJ IDEA, VS Code</li>
              <li>Postman, Swagger</li>
              <li>Jira, Slack</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">주요 프로젝트</h2>
        <div className="space-y-4">
          <div className="group">
            <Link to="/projects/joinus" className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-blue-100 hover:bg-blue-50/30 transition-all">
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600">JoinUs - 개발자 커뮤니티</h3>
                <p className="text-sm text-gray-500">실시간 소통과 지역 기반 모임 플랫폼</p>
              </div>
              <span className="text-gray-300 group-hover:text-blue-400">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">연락</h2>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:1space0926@naver.com" className="bg-gray-50 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center gap-2">
             <span>이메일 보내기</span>
          </a>
          <a href="https://github.com/woojoo123" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
             <span>GitHub 방문</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
