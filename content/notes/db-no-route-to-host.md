---
title: "Docker 네트워크: No Route to Host 에러"
date: "2024-02-10"
tags: ["Docker", "Network", "MariaDB"]
summary: "Docker Compose 환경에서 애플리케이션 컨테이너와 데이터베이스 컨테이너 간의 연결 실패 문제를 해결합니다."
---

## Context(상황)
Docker Compose를 사용하여 Spring Boot 애플리케이션과 MariaDB를 하나의 네트워크로 묶어 실행하는 과정에서 발생했습니다.

## Symptom(증상)
애플리케이션 구동 시 `java.net.NoRouteToHostException: No route to host` 에러와 함께 데이터베이스 연결에 실패하며 프로세스가 종료되었습니다.

## Repro(재현)
`docker-compose up` 명령어로 서비스를 시작할 때 간헐적으로 발생했습니다.

## Cause(원인)
Docker 호스트의 `iptables` 규칙이 Docker 브리지 네트워크 간의 통신을 차단하고 있었습니다. 특히 OS 보안 업데이트 이후 방화벽 설정이 초기화되거나 강화되었을 때 이러한 문제가 자주 발생합니다.

## Fix(해결)
Docker 서비스를 재시작하여 브리지 네트워크 인터페이스를 재설정하거나, 명시적으로 방화벽 설정에서 Docker 인터페이스를 허용 범위에 추가했습니다.

```bash
# Docker 서비스 재시작으로 인터페이스 갱신
sudo systemctl restart docker
```

## Prevention(재발방지 체크리스트)
- [ ] Docker Compose 파일 내에서 `networks`를 명시적으로 정의하여 격리 수준을 확인한다.
- [ ] 서비스 이름(Service Name)을 DNS 호스트네임으로 올바르게 참조하고 있는지 체크한다.
