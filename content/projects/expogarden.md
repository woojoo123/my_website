---
title: "ExpoGarden - 메타버스 쇼룸 플랫폼"
period: "2025.12 - 2026.01"
role: "웹 풀스택 (개인 프로젝트)"
summary: "2D 메타버스 공간에서 전시·부스를 운영하고, 실시간 소통 기능을 제공하는 쇼룸 플랫폼입니다."
stack:
  - React
  - TypeScript
  - Vite
  - Phaser.js
  - Java
  - Spring Boot
  - Spring Security
  - JPA
  - PostgreSQL
  - Flyway
  - WebSocket
  - STOMP
  - Docker
  - Nginx
image: "/assets/projects/expogarden/thumbnail.png"
links:
  github: "https://github.com/woojoo123/ExpoGarden" # TODO: 실제 GitHub URL로 교체
  demo: "https://expogarden.duckdns.org/"             # TODO: 실제 데모 URL로 교체
---

## 프로젝트 개요

ExpoGarden은 **창작자와 방문자를 연결하는 메타버스 전시 플랫폼**입니다.  
창작자는 자신의 쇼룸(부스)을 만들고 작품을 배치할 수 있고, 방문자는 캐릭터를 조작하며 2D 전시장을 탐색하고 부스를 관람합니다.  
실시간 채팅, 방명록, 질문 기능을 통해 **온라인 전시지만 오프라인 전시와 비슷한 상호작용 경험**을 제공하는 것을 목표로 했습니다.

---

## 프로젝트 정보

| 항목 | 내용 |
| --- | --- |
| 기간 | 2025.12 ~ 2026.01 |
| 인원 | 개인 |
| 역할 | 기획 · 설계 · 프론트엔드 · 백엔드 · 배포 전담 |

---

## 기술 스택

<div class="badges">
  <span class="badge">React 18</span>
  <span class="badge">TypeScript</span>
  <span class="badge">Vite</span>
  <span class="badge">Phaser.js 3</span>
  <span class="badge">Zustand</span>
  <span class="badge">Axios</span>
  <span class="badge">Java 17</span>
  <span class="badge">Spring Boot</span>
  <span class="badge">Spring Security</span>
  <span class="badge">JPA/Hibernate</span>
  <span class="badge">PostgreSQL</span>
  <span class="badge">Flyway</span>
  <span class="badge">WebSocket</span>
  <span class="badge">SockJS</span>
  <span class="badge">STOMP</span>
  <span class="badge">Docker</span>
  <span class="badge">Docker Compose</span>
  <span class="badge">Nginx</span>
  <span class="badge">AWS EC2</span>
</div>

---

## 주요 서비스

- **전시 운영 관리**: 전시(Exhibition)–홀(Hall)–부스(Booth) 도메인 구조를 기반으로 전시 공간 생성·관리
- **부스 등록 및 승인 워크플로우**: 부스 생성/수정/제출, 관리자 승인·반려·아카이브까지 상태 기반으로 운영
- **2D 전시장 탐색 경험**: Phaser.js 기반 2D 탑다운 전시장에서 캐릭터를 이동시키며 부스를 탐색
- **관리자 대시보드**: 상태별 부스 필터링, 반려 사유 관리, 전시/부스 단위 통계 및 인기 부스 조회
- **실시간 방문자 상호작용**: 홀/부스 단위 실시간 채팅, 질문·방명록 등 참여형 기능으로 전시 현장감 강화

---

## 핵심 기능

### 인증·인가 & 권한 모델

- JWT 기반 인증(Access 15분 / Refresh 7일)과 Spring Security 필터 체인 설계  
- 전역 역할(ADMIN / EXHIBITOR / VISITOR) + 부스 멤버십(OWNER / EDITOR / VIEWER) 이중 권한 모델  
- 커스텀 PermissionEvaluator를 통한 부스 단위 권한 체크  

<details>
  <summary><strong>자세히 보기</strong></summary>

#### JWT 기반 인증/인가
- Access Token(15분) + Refresh Token(7일) 구조 설계  
- Spring Security 필터 체인에 JWT 인증 필터를 삽입해, 모든 API 요청에서 토큰 검증 및 SecurityContext 설정  
- 토큰 재발급(Refresh) 시, 블랙리스트/리프레시 토큰 회전 전략을 고려해 구현  

#### 역할 및 부스 멤버십 권한 모델
- 전역 역할(Role): ADMIN / EXHIBITOR / VISITOR  
- 부스 멤버십(Role): OWNER / EDITOR / VIEWER  
- 전역 역할은 전시/홀/부스 관리 권한 범위를, 부스 멤버십은 개별 부스에서의 수정/보기 권한을 세밀하게 제어  
- Spring Security의 hasRole + 커스텀 PermissionEvaluator를 조합하여, 부스 단위 권한을 도메인 로직과 분리  

</details>


### 상태 머신 기반 부스 워크플로우

- DRAFT → SUBMITTED → APPROVED/REJECTED → ARCHIVED 상태 전이 모델링  
- REJECTED → DRAFT → SUBMITTED 흐름으로 반려 후 재작성 지원  
- 상태별 수정/제출 가능 여부와 권한을 명시적으로 정의하고 도메인 메서드로 검증  

<details>
  <summary><strong>자세히 보기</strong></summary>

#### 부스 상태 전이 모델링
- 기본 상태 흐름: DRAFT → SUBMITTED → APPROVED / REJECTED → ARCHIVED  
- 반려 후 재작성: REJECTED → DRAFT → SUBMITTED  
- 상태마다 수정 가능 여부, 제출 가능 여부를 명시적으로 정의한 상태 머신 설계  

#### 상태·권한 체크 로직
- 컨트롤러/서비스 레벨에서 Booth.canEdit(user) / Booth.canSubmit(user) 등 도메인 메서드로 상태 + 멤버십 기준을 함께 검증  
- 관리자만 APPROVED / REJECTED / ARCHIVED로 변경할 수 있도록 명확히 분리  
- 상태 전이 이력을 별도 엔티티로 기록해, 부스별 히스토리와 반려 사유를 추적 가능하게 구현  

</details>


### 레이아웃 자동 배치 알고리즘

- GRID / CIRCLE / ROWS 타입에 따라 부스 좌표를 자동 계산하는 순수 함수 알고리즘 구현  
- rows, cols, radius, spacing 등 파라미터 기반으로 전시장의 부스를 규칙적으로 배치  
- PostgreSQL JSONB 기반 파라미터/오버라이드 저장으로 확장성 확보  

<details>
  <summary><strong>자세히 보기</strong></summary>

전시장이 커질수록 부스를 수동 배치하는 것은 비효율적이어서, 레이아웃 타입과 파라미터에 따라 부스 좌표를 자동 계산하도록 설계했습니다.

#### 지원 레이아웃 타입
- GRID: rows, cols, spacing 파라미터로 격자 형태 배치  
- CIRCLE: radius, spacing, center 좌표로 원형 배치  
- ROWS: rowCount, spacing으로 여러 줄 배치  

#### 구현 방식
- layoutType과 파라미터(JSONB)만으로 좌표를 계산하는 순수 함수 형태 알고리즘을 작성하여, 테스트와 재사용성을 확보  
- 각 부스는 기본적으로 자동 배치 좌표를 사용하지만, 부스별 overridePosition 필드를 두어 개별 좌표 오버라이드 지원  
- PostgreSQL JSONB 컬럼에 레이아웃/오버라이드 설정을 저장해, 스키마 변경 없이 파라미터 확장 가능  

</details>


### 실시간 멀티플레이어 & 채팅

- WebSocket(SockJS) + STOMP 기반 홀/부스 단위 토픽 구조 설계  
- 입장/퇴장, 위치 갱신, 채팅 메시지를 이벤트 타입별로 분리해 처리  
- 재연결/하트비트 처리로 네트워크 끊김에도 안정적인 동작 보장  

<details>
  <summary><strong>자세히 보기</strong></summary>

#### 토픽 구조
- 홀 단위: `/topic/hall.{hallId}`  
- 부스 단위: `/topic/booth.{boothId}`  
- 입장/퇴장, 위치 갱신, 채팅 메시지를 이벤트 타입별로 분리해 클라이언트에서 처리  

#### 구현 포인트
- WebSocket(SockJS) + STOMP 기반으로 구독/발행 구조를 구성  
- 하트비트 및 재연결 로직을 클라이언트에 구현해, 일시적인 네트워크 단절에도 안정적으로 동작  
- 서버에서는 SessionDisconnectEvent를 리스닝하여, 세션 종료 시 사용자 퇴장 이벤트를 브로드캐스트  

</details>

---

## 트러블슈팅

<details>
  <summary><strong>1) Phaser.js 씬 재시작 시 상태 유지 문제</strong></summary>

### 문제

홀/부스 목록이 변경될 때마다 Phaser 게임 인스턴스를 새로 생성하면 렌더링이 끊기고,  
캐릭터 위치·카메라 상태·다른 플레이어 정보가 초기화되어 사용자 경험이 크게 떨어졌습니다.

### 원인

데이터 변경을 곧바로 **"게임 전체 재생성"**으로 처리하면서, 씬 내부 상태와 리소스 생명주기(생성/해제)가 불필요하게 반복되고 있었습니다.

### 해결

- Phaser **게임 인스턴스는 한 번만 생성**하고, 씬(Scene)만 재시작하도록 구조를 변경했습니다.  
- `game.scene.restart()`로 씬 재시작 시 필요한 데이터(홀/부스 정보, 플레이어 위치 등)를 인자로 전달  
- React `useEffect` 의존성 배열을 조정해, **booths 변경 등 핵심 변화에만** 씬이 재시작되도록 제어  
- 씬 `cleanup` 단계에서 이벤트 리스너/타이머/게임 오브젝트를 명시적으로 정리  
- 게임 인스턴스 파괴는 React 컴포넌트 언마운트 시점에만 수행하도록 생명주기를 분리  

### 결과

홀 전환 및 부스 목록 갱신 시에도 불필요한 전체 재생성이 제거되어 렌더링이 안정화됐고,  
캐릭터/카메라 상태가 의도대로 유지되는 것을 확인했습니다.

</details>


<details>
  <summary><strong>2) 멀티플레이어 위치 동기화 및 채팅 말풍선 누적 문제</strong></summary>

### 문제

WebSocket으로 수신한 다른 사용자 위치를 2D 공간에 표시하는 과정에서,  
- 사용자가 퇴장해도 스프라이트가 남거나  
- 채팅 말풍선이 중복 생성되어  
오브젝트가 계속 누적되는 문제가 발생했습니다.

### 원인

사용자를 **하나의 단위로 추적/정리하는 기준이 약했고**,  
퇴장 이벤트 처리와 UI 타이머 관리가 분리되어 있어 정리가 누락되고 있었습니다.

### 해결

- 다른 플레이어를 `Map<userId, PlayerObject>`로 관리하여 `userId` 단일 키로 오브젝트를 일관되게 추적  
- 퇴장 이벤트 수신 시 해당 `userId`의 스프라이트/이름표/말풍선 등 연결된 Phaser 오브젝트를 `destroy()`로 명시 제거  
- 채팅 말풍선은 Phaser Timer로 일정 시간 후 자동 제거되도록 처리  
- Timer 역시 `Map`에 저장해 말풍선/타이머 중복 생성을 방지  
- 서버의 `SessionDisconnectEvent`를 리스닝해 세션 종료 시 정리 이벤트를 즉시 반영  

### 결과

멀티플레이어 환경에서도 메모리 누수 없이 안정적으로 동작하며,  
다른 사용자의 위치와 채팅이 실시간으로 자연스럽게 표시됩니다.

</details>

---

## 아키텍처

<img src="/assets/projects/expogarden/architecture.png" alt="ExpoGarden 시스템 아키텍처"
     style="max-width: 100%; border-radius: 8px; margin: 0.5rem 0;" />