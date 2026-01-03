
import matter from 'gray-matter';
import { ProjectMeta, NoteMeta, ProjectData, NoteData } from '../types';

// Note: Buffer is needed by gray-matter for parsing markdown frontmatter
if (typeof window !== 'undefined' && !(window as any).Buffer) {
  (window as any).Buffer = { from: (s: string) => new TextEncoder().encode(s) };
}

/**
 * STATIC FALLBACK CONTENT
 * Provides immediate execution in browser environments where Vite's build-time 
 * glob transformation is not available (e.g., standard ES module previews).
 */
const FALLBACK_PROJECTS: Record<string, string> = {
  '/content/projects/joinus.md': `---
title: "JoinUs - 개발자 커뮤니티 플랫폼"
period: "2023.05 - 2023.08"
role: "리드 개발자"
stack: ["React", "Spring Boot", "JPA", "MariaDB", "Docker"]
summary: "개발자들이 지식을 공유하고 지역 모임에 참여할 수 있는 실시간 커뮤니티 플랫폼입니다."
links:
  github: "https://github.com/woojoo123/joinus"
  demo: "https://joinus-demo.com"
---
## 문제 정의
기존 커뮤니티 플랫폼의 한계를 극복하고 지역 기반 모임을 활성화하기 위한 시도였습니다.

## 결과 및 향후 계획
베타 테스터들로부터 긍정적인 피드백을 받았으며, 확장성을 위해 아키텍처 개선을 준비 중입니다.`
};

const FALLBACK_NOTES: Record<string, string> = {
  '/content/notes/jwt-role-troubleshoot.md': `---
title: "JWT 역할 기반 인가(RBAC) 에러 해결"
date: "2024-03-15"
tags: ["JWT", "Spring Security", "Troubleshooting"]
summary: "정상적인 역할을 보유하고 있음에도 403 Forbidden 에러가 발생하는 문제를 해결한 과정입니다."
---
## Context(상황)
Spring Boot 3.x 환경에서 권한 인가 처리 중 발생한 문제를 다룹니다.

## 해결 방법
접두사 설정을 명확히 하여 Spring Security의 기본 동작과 JWT Claims의 불일치를 해결했습니다.`,
  '/content/notes/db-no-route-to-host.md': `---
title: "Docker 네트워크: No Route to Host 에러"
date: "2024-02-10"
tags: ["Docker", "Network", "MariaDB"]
summary: "Docker Compose 환경에서 애플리케이션 컨테이너와 데이터베이스 컨테이너 간의 연결 실패 문제를 해결합니다."
---
## 원인 분석
Docker 호스트의 iptables 규칙이 통신을 방해하는 원인을 파악하고 해결했습니다.`
};

// Attempt to use Vite's built-in glob functionality
let projectFiles: Record<string, any> = {};
let noteFiles: Record<string, any> = {};

try {
  // Direct calls to import.meta.glob are required for Vite's static analyzer to transform them.
  projectFiles = (import.meta as any).glob('/content/projects/*.md', { as: 'raw', eager: true });
  noteFiles = (import.meta as any).glob('/content/notes/*.md', { as: 'raw', eager: true });
} catch (e) {
  projectFiles = FALLBACK_PROJECTS;
  noteFiles = FALLBACK_NOTES;
}

if (Object.keys(projectFiles).length === 0) projectFiles = FALLBACK_PROJECTS;
if (Object.keys(noteFiles).length === 0) noteFiles = FALLBACK_NOTES;

const getSlugFromPath = (path: string) => {
  return path.split('/').pop()?.replace('.md', '') || '';
};

export const getAllProjects = (): ProjectMeta[] => {
  return Object.entries(projectFiles).map(([path, content]) => {
    const { data } = matter(content as string);
    return {
      ...(data as any),
      slug: getSlugFromPath(path),
    };
  });
};

export const getProjectBySlug = (slug: string): ProjectData | null => {
  const entry = Object.entries(projectFiles).find(([path]) => path.endsWith(`${slug}.md`));
  if (!entry) return null;

  const { data, content } = matter(entry[1] as string);
  return {
    meta: { ...(data as any), slug },
    content,
  };
};

export const getAllNotes = (): NoteMeta[] => {
  const notes = Object.entries(noteFiles).map(([path, content]) => {
    const { data } = matter(content as string);
    return {
      ...(data as any),
      slug: getSlugFromPath(path),
    };
  });

  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getNoteBySlug = (slug: string): NoteData | null => {
  const entry = Object.entries(noteFiles).find(([path]) => path.endsWith(`${slug}.md`));
  if (!entry) return null;

  const { data, content } = matter(entry[1] as string);
  return {
    meta: { ...(data as any), slug },
    content,
  };
};
