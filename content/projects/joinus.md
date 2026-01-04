---
title: "Joinus - 해외공구 플랫폼"
period: "2025.11 - 2025.12"
role: "백엔드 개발자"
summary: "지역 공동구매·입점(납품)·회원 관리를 하나의 운영 흐름으로 통합한 해외공구 플랫폼입니다."
stack:
  - React
  - JavaScript
  - HTML
  - CSS
  - Java
  - Spring Boot
  - Spring Security
  - MariaDB
  - JPA
  - QueryDSL
  - Git
  - GitHub
image: "/assets/projects/joinus/thumbnail.png"
links:
  backend: "https://github.com/orgs/kosta-303-final-proj/repositories"
---

## 프로젝트 개요

지역 공동구매·입점(납품)·회원 관리를 **하나의 운영 흐름**으로 통합한 해외공구 플랫폼입니다.

<div class="callout">
  <div class="callout-title">주요 포인트</div>
  <ul>
    <li><strong>인증/인가</strong>: Spring Security + JWT(Access/Refresh) + OAuth2</li>
    <li><strong>운영 백오피스</strong>: 대시보드/통계, 납품 승인 및 상품 관리, 주문 처리</li>
    <li><strong>고객센터</strong>: 공지/FAQ/1:1 문의(이미지 첨부) + 파일 메타데이터 관리</li>
  </ul>
</div>

---

## 프로젝트 정보

| 항목 | 내용 |
| --- | --- |
| 기간 | 2025.11 ~ 2025.12 |
| 인원 | 4명 |
| 역할 | 백엔드 개발자 |

---

## 기술 스택

<div class="badges">
  <span class="badge">React</span>
  <span class="badge">JavaScript</span>
  <span class="badge">HTML</span>
  <span class="badge">CSS</span>
  <span class="badge">Java</span>
  <span class="badge">Spring Boot</span>
  <span class="badge">Spring Security</span>
  <span class="badge">MariaDB</span>
  <span class="badge">JPA</span>
  <span class="badge">QueryDSL</span>
  <span class="badge">Git</span>
  <span class="badge">GitHub</span>
</div>

---

## 주요 기능

### 회원/인증
- 일반 로그인 + OAuth2 소셜 로그인
- 마이페이지 기반 사용자 기능 제공

### 공동구매
- 제안 상품 → 공구 상품 등록 → 옵션 선택/주문/결제 흐름

### 관리자(백오피스)
- 대시보드/통계
- 납품(업체 승인 및 상품 관리)
- 주문 처리
- 고객센터 운영

### 고객센터
- 공지/FAQ/1:1 문의(이미지 첨부)

---

## 내가 구현한 핵심 기여

### 인증 및 회원 관리 시스템

- JWT 기반 인증 시스템 구현 (Access Token / Refresh Token)
- Spring Security를 활용한 보안 필터 체인 구성
- OAuth2 소셜 로그인 연동 (카카오/네이버)
- BCrypt를 이용한 비밀번호 암호화
- 아이디/비밀번호 찾기 기능 (이름, 이메일 검증 기반)
- 회원가입 시 유효성 검증 및 중복 체크

### 고객센터 시스템

- 공지사항 목록/상세 조회 (페이지네이션 적용)
- FAQ 조회 기능
- 1:1 문의 작성/조회 (이미지 첨부 지원)
- 문의 카테고리별 분류 (주문, 배송, 취소/환불 등)
- 파일 업로드 기능 구현

### 관리자 대시보드 및 통계

- 실시간 대시보드 (매출, 공구 현황, 주문 대기 건수)
- 기간별 매출 통계 조회 (일/주/월 단위)
- 상품별 통계 분석
- 알림 발송 시스템
- 공구 진행 현황 모니터링

### 납품 관리 시스템

- 납품 업체 신청 및 승인 관리
- 업체별 상품 등록/조회 기능
- 납품 상품 상태 관리 (대기/승인/반려)
- 납품문의 기능

---

## 트러블슈팅

### OAuth 소셜 로그인 토큰 URL 노출 취약점 개선

- **문제**: OAuth 성공 후 JWT 토큰이 URL querystring으로 전달되어 히스토리/로그/Referer 노출 가능
- **해결**: 세션 기반 저장 + 토큰 교환 API(1회성) + 프론트 히스토리 제거
- **결과**: URL/히스토리/서버 로그/Referer에 토큰 잔존 차단으로 보안 안정성 향상

<details>
  <summary><strong>해결 과정 자세히 보기</strong></summary>

1) URL에 토큰을 전달하지 않고 세션에 저장, redirect는 `?success=true`  
2) `GET /api/auth/oauth/token` 추가(세션에서 토큰 조회 후 즉시 삭제 — 1회성)  
3) 프론트에서 토큰 교환 호출 + 히스토리 제거 처리

```js
fetch('/api/auth/oauth/token', { credentials: 'include' })
navigate(..., { replace: true })
```

</details>

---

## 산출물

<details>
  <summary><strong>ERD (27개 엔티티)</strong></summary>
  
  <img src="/assets/projects/joinus/erd.png" alt="ERD 다이어그램" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>

<details>
  <summary><strong>시스템 아키텍처 다이어그램</strong></summary>
  
  <img src="/assets/projects/joinus/architecture.png" alt="시스템 아키텍처" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>

<details>
  <summary><strong>IA 설계</strong></summary>
  
  <img src="/assets/projects/joinus/IA.png" alt="IA 설계" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>

<details>
  <summary><strong>화면 설계서 (Figma)</strong></summary>
  
  <img src="/assets/projects/joinus/figma.png" alt="화면 설계서" style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />
</details>


