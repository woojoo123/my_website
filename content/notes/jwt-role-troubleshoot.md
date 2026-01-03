---
title: "JWT 역할 기반 인가(RBAC) 에러 해결"
date: "2024-03-15"
tags: ["JWT", "Spring Security", "Troubleshooting"]
summary: "정상적인 역할을 보유하고 있음에도 403 Forbidden 에러가 발생하는 문제를 해결한 과정입니다."
---

## Context(상황)
Spring Boot 3.x 환경에서 Spring Security와 JWT를 연동하여 역할 기반 접근 제어(RBAC)를 구현하고 있었습니다.

## Symptom(증상)
사용자가 정상적으로 로그인을 마쳐 `ROLE_USER` 권한이 담긴 토큰을 보유하고 있음에도 불구하고, `@PreAuthorize("hasRole('USER')")`가 설정된 API 호출 시 `403 Forbidden` 에러가 지속적으로 발생했습니다.

## Repro(재현)
1. `/api/login`을 통해 JWT 발급.
2. 발급된 토큰의 Claims에서 `roles: ["ROLE_USER"]` 포함 여부 확인.
3. 해당 토큰을 헤더에 담아 권한이 필요한 API 호출.
4. 결과: 403 Forbidden 반환.

## Cause(원인)
Spring Security의 `DefaultMethodSecurityExpressionHandler`는 기본적으로 역할 접두사(`ROLE_`)를 자동으로 붙여서 검사합니다. 하지만 JWT에서 추출한 권한을 `GrantedAuthority` 리스트로 변환할 때 접두사 처리가 중복되거나, `SimpleGrantedAuthority` 생성 시점에 매핑이 어긋나고 있었습니다.

## Fix(해결)
`JwtAuthenticationConverter`를 커스텀하여 권한 추출 시 접두사 처리를 명확하게 정의했습니다.

```java
// JwtAuthenticationConverter 설정 예시
var jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
jwtGrantedAuthoritiesConverter.setAuthorityPrefix("ROLE_"); // 접두사 강제 설정
jwtGrantedAuthoritiesConverter.setAuthoritiesClaimName("roles");
```

## Prevention(재발방지 체크리스트)
- [ ] 토큰 발급 시 Claims에 접두사가 포함되어 있는지 중복 여부를 확인한다.
- [ ] Security Config에서 `GrantedAuthorityDefaults` 빈 설정을 통해 기본 접두사 명칭을 통일한다.
- [ ] 디버그 로그를 통해 `SecurityContextHolder`에 실제 담긴 권한 문자열을 체크한다.
