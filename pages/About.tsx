
import React, { useEffect } from 'react';

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
            단순히 기능 구현을 넘어, 안정성과 유지보수성을 고려한 설계를 좋아합니다.
          </p>
          <p>
            특히 개발 과정에서 마주치는 복잡한 이슈나 장애를 해결하고 기록하는 것에 가치를 둡니다. 
            기술적인 문제 해결을 통해 동료들과 사용자들에게 더 나은 가치를 전달하고자 합니다.
          </p>
          <p>
            깨끗한 코드와 뛰어난 사용자 경험의 조화를 지향하며, 항상 '왜?'라는 질문을 던지며 근본적인 원인을 파악하려 노력합니다.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">핵심 역량</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 transition-colors">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Backend & Architecture
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 인증/인가 설계 및 구현: JWT 기반 인증, 역할 기반 권한 제어, OAuth2 소셜 로그인 연동</li>
              <li>• REST API 설계 및 계층형 구조 적용(Controller–Service–Repository), 예외 처리/상태 코드 관리</li>
              <li>• JPA 도메인 모델링(연관관계/LAZY 로딩) 및 페이징 처리, QueryDSL 기반 동적 쿼리 구현</li>
              <li>• 통계/대시보드 등 복잡한 조회 요구사항에서 쿼리 구조를 정리하고 성능을 개선한 경험</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 transition-colors">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Frontend & Product
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• React 기반 화면 구성과 라우팅 설계, 검색/필터 등 상태 관리와 API 연동 경험</li>
              <li>• 사용자 흐름을 기준으로 UI를 설계하고, 데이터 로딩/에러 상태까지 포함해 화면을 안정적으로 구성</li>
              <li>• 공통 컴포넌트화와 스타일링을 통해 재사용성과 일관성을 유지하는 방식 선호</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 transition-colors">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
              Collaboration & Problem Solving
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• 이슈 발생 시 원인 추적 → 해결 → 재발 방지(기록/공유)까지 이어지는 문제 해결 방식</li>
              <li>• Git/GitHub 협업 흐름(브랜치/PR/리뷰)에 익숙하며, 문서화(Notion/블로그)로 지식을 축적</li>
              <li>• 기능 구현뿐 아니라 운영 관점에서 리스크를 줄이는 방향(예외 케이스 정리, 재현 가능한 기록)을 중시</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-xl p-5 bg-white hover:border-blue-200 transition-colors">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              Data & AI (Applied)
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Pandas/NumPy 기반 데이터 전처리·EDA(결측/이상치 처리, 시각화) 경험</li>
              <li>• 데이터 수집 → 전처리 → 모델링 → 평가까지 ML 파이프라인을 수행해본 경험을 바탕으로, 서비스 문제를 데이터 관점에서도 정의하고 개선하려는 관심</li>
            </ul>
          </div>
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
        <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-2 mb-6">Now / Next</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            데이터 분석 경험을 바탕으로, 사용자 행동을 해석해 기능 개선으로 연결하는 방법에 관심이 있습니다. 
            작은 지표부터 정의하고, 검색/정렬/추천처럼 사용자 체감이 큰 영역을 단계적으로 고도화해보고 싶습니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
