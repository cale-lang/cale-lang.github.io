---
title: 시작하기
description: Cale 사용 준비와 현재 배포 상태
---

## 현재 상태

Cale은 아직 일반 사용자용 안정 배포판이 아닙니다. 지금은 compiler, runtime, Lacail debugger, Qstar tooling이 빠르게 성장하는 개발 단계입니다.

## 소스에서 빌드하기

현재 라운드의 웹사이트는 배포 binary를 제공하지 않습니다. 실제 binary 배포는 GitHub Releases 기반으로 준비될 예정입니다.

개발자는 Cale repository를 clone한 뒤 각 프로젝트의 Makefile을 사용할 수 있습니다.

```sh
git clone https://github.com/GungYe918/cale.git
cd cale
make
```

Lacail은 Cale 본체와 분리된 독립 top-level 프로젝트로 빌드할 수 있습니다.

```sh
make -C lacail check
```

## 앞으로의 배포

첫 공개 배포는 다음 항목을 기준으로 준비됩니다.

- macOS 우선 native binary
- GitHub Releases 기반 다운로드
- checksum과 release note
- Cale compiler, Lacail, Qstar를 구분한 artifact

