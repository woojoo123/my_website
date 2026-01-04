---
title: "Pumda - 동물보호소·시민 연결 통합 관리 플랫폼"
period: "2025.09 - 2025.10"
role: "백엔드 개발자"
summary: "동물보호소와 시민을 연결해 구조/입양/후원/봉사/커뮤니티를 한 곳에서 운영할 수 있는 통합 관리 플랫폼입니다."
stack:
  - HTML5
  - CSS
  - JavaScript
  - jQuery
  - JSP
  - Java
  - Servlet
  - MariaDB
  - MyBatis
  - Git
  - GitHub
image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400"
links:
  github: "https://github.com/kosta-303-mini-proj/shelter-server"
---

## 프로젝트 개요

동물보호소와 시민을 연결해 구조/입양/후원/봉사/커뮤니티를 한 곳에서 운영할 수 있는 통합 관리 플랫폼입니다.

<div class="callout">
  <div class="callout-title">주요 포인트</div>
  <ul>
    <li><strong>동물 관리</strong>: 구조 동물 등록/관리, 입양 대기 동물 목록·상세, 동물별 보호일지 운영</li>
    <li><strong>입양 시스템</strong>: 입양 신청 및 심사 관리, 신청자 승인/거절 처리</li>
    <li><strong>후원/봉사</strong>: 정기·일시 후원 관리 및 내역 조회, 봉사 일정 등록 및 신청자 관리</li>
    <li><strong>커뮤니티</strong>: 게시판(공지/정보/질문/후기/잡담), 댓글·좋아요</li>
    <li><strong>보호소 운영</strong>: 보호소 등록 신청/승인, 보호소 프로필/공지 관리, 역할 기반 권한(관리자/스탭/뷰어)</li>
  </ul>
</div>

---

## 프로젝트 정보

| 항목 | 내용 |
| --- | --- |
| 기간 | 2025.09 ~ 2025.10 |
| 인원 | 4명 |
| 역할 | 백엔드 개발자 |

---

## 기술 스택

<div class="badges">
  <span class="badge">HTML5</span>
  <span class="badge">CSS</span>
  <span class="badge">JavaScript</span>
  <span class="badge">jQuery</span>
  <span class="badge">JSP</span>
  <span class="badge">Java</span>
  <span class="badge">Servlet</span>
  <span class="badge">MariaDB</span>
  <span class="badge">MyBatis</span>
  <span class="badge">Eclipse</span>
  <span class="badge">VS Code</span>
  <span class="badge">ERD Cloud</span>
  <span class="badge">HeidiSQL</span>
  <span class="badge">Figma</span>
  <span class="badge">Git</span>
  <span class="badge">GitHub</span>
</div>

---

## 주요 기능

### 동물 관리
- 구조 동물 등록/관리
- 입양 대기 동물 목록·상세
- 동물별 보호일지 운영

### 입양 시스템
- 입양 신청 및 심사 관리
- 신청자 승인/거절 처리

### 후원/봉사
- 정기·일시 후원 관리 및 내역 조회
- 봉사 일정 등록 및 신청자 관리

### 커뮤니티
- 게시판(공지/정보/질문/후기/잡담)
- 댓글·좋아요

### 보호소 운영
- 보호소 등록 신청/승인
- 보호소 프로필/공지 관리
- 역할 기반 권한(관리자/스탭/뷰어)

### 사용자 기능
- 회원가입/로그인(소셜 로그인)
- 팔로우(동물/보호소)
- 알림
- 신고

---

## 주요 기능/기술

### 1. 소셜 로그인 연동 및 계정 통합

- OAuth 2.0 기반 카카오/네이버 소셜 로그인 구현
- 소셜 사용자 정보를 내부 회원과 매핑하고 소셜 연동 상태를 별도 테이블로 관리
- 로그인 방식 체크 로직으로 계정 잠금/중복 연동 이슈 방지

### 2. 외부 공공 API 연동 및 데이터 처리

- 실종동물/구조동물 공공 API 연동 구현
- Builder 패턴으로 요청 파라미터 구성, DTO로 응답 매핑
- 비동기 처리 및 페이징 적용, API 에러 코드 분류와 예외 처리 체계화

### 3. DB 커넥션/트랜잭션 운영 안정화

- MyBatis POOLED DataSource 설정(최대 활성/유휴 연결 설정)
- try-with-resources로 SqlSession 자동 종료 보장
- 트랜잭션 경계 관리를 위한 콜백 기반 처리 적용

### 4. 파일 업로드 및 미디어 관리

- MultipartRequest로 이미지/동영상 업로드 처리
- 파일 확장자 검증(jpg/jpeg/png) 및 크기 제한(이미지 5MB, 동영상 100MB) 사전 검증
- DefaultFileRenamePolicy로 중복 파일명 자동 처리 및 업로드 디렉토리 자동 생성

---

## 내가 구현한 핵심 기여

<div class="grid-2">

<div class="card">

### 로그인/회원가입 + OAuth2 소셜 로그인

- 사용자명 또는 이메일 기반 로그인 지원, BCrypt 기반 비밀번호 검증
- 회원가입 유효성 검증(사용자명/이메일/비밀번호) 및 중복 체크
- OAuth 2.0 인증 코드 방식으로 카카오/네이버 로그인 구현
- Provider별 Access Token 획득 및 사용자 정보 조회, 네이버 state 파라미터 검증으로 CSRF 방지
- 기존 회원 자동 연동/신규 회원 자동 가입, 이메일 기반 계정 연동 처리
- 세션 기반 로그인 정보 저장 및 관리

</div>

<div class="card">

### 마이페이지(프로필/설정/알림) 및 대시보드

- 프로필 수정(이름/닉네임/연락처/소개/주소), 프로필 이미지 업로드(10MB 제한) 및 자동 리네임
- 비밀번호 변경(현재 비밀번호 검증 → 신규 비밀번호 BCrypt 저장)
- 알림 수신 설정(공지/입양/팔로우 보호소/새 기기 로그인 등) 저장 및 즉시 반영
- 마이페이지 대시보드: 활동 통계/미확인 알림/입양 신청/봉사 일정/누적 후원액/팔로우 수 등 조회

</div>

</div>

---

## 트러블슈팅

### 마이페이지 대시보드 성능 최적화

- **문제**: 대시보드 6개 지표(미확인 알림, 진행 중 입양 신청, 예정 봉사 일정, 누적 후원액, 팔로우 수, 미답변 문의)를 각각 별도 쿼리로 조회하여 페이지 로드 시 6~7개 쿼리가 순차 실행 → 응답 지연 및 DB 부하 증가

- **해결**: 
  - 6개 개별 쿼리를 1개의 통합 쿼리로 통합
  - DB 연결 횟수 감소로 네트워크 오버헤드 감소
  - 단일 쿼리 실행으로 응답 시간 단축

- **결과**: 대시보드 로딩 시간이 약 70% 단축, DB 부하 감소 및 동시 접속 처리 능력 향상

<details>
  <summary><strong>해결 과정 자세히 보기</strong></summary>

기존에는 각 지표마다 별도의 SELECT 쿼리를 실행했습니다:
- 미확인 알림 수 조회
- 진행 중 입양 신청 수 조회
- 예정 봉사 일정 수 조회
- 누적 후원액 조회
- 팔로우 수 조회
- 미답변 문의 수 조회

이를 하나의 통합 쿼리로 변경하여:
- JOIN과 서브쿼리를 활용한 단일 쿼리 구성
- 한 번의 DB 연결로 모든 지표 조회
- 응답 시간 대폭 단축 및 DB 부하 감소

</details>

---

## 주요 화면

<details>
  <summary><strong>메인페이지</strong></summary>
  
  <img src="/assets/projects/pumda/mainPage.png" alt="메인페이지" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>

<details>
  <summary><strong>커뮤니티</strong></summary>
  
  <img src="/assets/projects/pumda/community.png" alt="커뮤니티" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>

<details>
  <summary><strong>보호소 일상</strong></summary>
  
  <img src="/assets/projects/pumda/shelter_log.png" alt="보호소 일상" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>

---

## 링크

- **GitHub**: https://github.com/kosta-303-mini-proj/shelter-server
