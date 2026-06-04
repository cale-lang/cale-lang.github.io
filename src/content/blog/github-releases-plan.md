---
title: GitHub Releases 기반 배포 계획
description: Cale의 첫 배포 흐름은 source build를 유지하면서 macOS 우선 binary artifact를 GitHub Releases에 붙이는 방향입니다.
pubDate: 2026-06-04
category: release
tags:
  - GitHub Releases
  - install
  - source build
lang: ko
---

현재 Cale의 설치 경로는 source build가 기준입니다. `git clone`, `make`, `make check`가 가장 정확한 진입점이고, Lacail과 Qstar도 각자 Makefile 경계를 통해 확인합니다.

하지만 장기적으로는 GitHub Releases 기반 binary 배포가 필요합니다. 사용자가 compiler와 debugger를 바로 내려받아 실험할 수 있어야 언어 프로젝트처럼 보이고, 실제 사용 흐름도 짧아집니다.

초기 binary는 macOS를 우선 대상으로 잡는 것이 자연스럽습니다. 이후 Linux와 Windows는 compile 가능한 경계, object format, process/platform layer, diagnostic 품질을 넓히면서 순차적으로 붙일 수 있습니다.

이 사이트의 `/install/` 페이지는 그 전환을 염두에 두고 설계되어 있습니다. 지금은 source build 명령을 보여주지만, release artifact가 준비되면 같은 페이지에 curl 명령과 archive download 버튼을 추가하면 됩니다.
