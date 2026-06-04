---
title: Cale이 C를 대체하지 않고 C ABI와 공존하려는 이유
description: Cale의 첫 설계 축은 C를 버리는 것이 아니라 기존 ABI와 OS 경계를 유지한 채 위험한 의미를 더 잘 설명하는 것입니다.
pubDate: 2026-06-04
category: language
tags:
  - C lane
  - C ABI
  - interop
lang: ko
---

Cale은 C를 한 번에 대체하려는 언어가 아닙니다. C가 이미 차지하고 있는 OS, kernel, runtime, embedded 경계를 현실로 받아들이고, 그 위에서 더 설명 가능한 컴파일러와 도구 체계를 만드는 프로젝트입니다.

그래서 초기 방향은 C ABI와 공존하는 것입니다. 기존 C source와 object file, executable, debug artifact를 버리지 않고, Cale compiler와 Lacail debugger가 그 산출물을 읽고 더 많은 의미를 붙일 수 있어야 합니다.

이 접근은 점진적인 전환을 가능하게 합니다. Cale은 새로운 런타임을 먼저 요구하기보다, 이미 존재하는 C 경계에서 위험한 기본값을 compiler-readable semantics로 끌어올리는 쪽에 가깝습니다.

장기적으로 Cale lane이 커지더라도 C lane은 계속 중요합니다. Cale이 설계하려는 것은 C와 단절된 세계가 아니라, C를 이해하는 더 엄격한 시스템 언어와 분석 도구의 경로입니다.
