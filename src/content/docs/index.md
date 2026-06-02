---
title: Cale
description: C ABI와 공존하는 시스템 언어와 컴파일러 프로젝트
template: splash
hero:
  tagline: Cale은 C ABI와 시스템 생태계를 존중하면서, 더 명시적인 의미론과 분석 가능한 컴파일러 파이프라인을 세우는 언어/컴파일러 프로젝트입니다.
  actions:
    - text: 시작하기
      link: /getting-started/
      variant: primary
    - text: 컴파일러 구조
      link: /compiler/
---

## C와 함께 진화하는 시스템 언어

Cale은 C를 버리는 프로젝트가 아닙니다. C가 오래 지켜 온 단순한 ABI, 낮은 런타임 의존성, OS와 커널 친화성을 유지하면서, 위험한 기본값을 컴파일러가 이해할 수 있는 의미론으로 끌어올리는 것이 목표입니다.

현재 Cale은 아이디어 문서만 있는 언어가 아니라, C source를 SIR/FIR/BCIR/Sol 경로로 낮추는 실제 컴파일러 파이프라인을 갖추고 있습니다. 아직 Clang 대체재라고 부르기에는 이르지만, 실전 C 프로젝트를 통과하기 시작한 시스템 컴파일러로 성장하고 있습니다.

## 지금의 초점

- 기존 C source와 C ABI를 가능한 한 그대로 받아들이는 C lane
- C보다 명시적인 nullable, slice, ownership-like state, UB policy를 갖는 Cale lane
- source 의미를 보존하는 SIR/FIR/BCIR/Sol 컴파일러 계층
- Cale artifact와 일반 debug binary를 함께 읽는 Lacail debugger
- 언젠가 GitHub Releases를 통해 받을 수 있는 정적/네이티브 binary 배포

## 장기 비전

Cale의 핵심 문장은 간단합니다.

```txt
co-exist
co-dependent
co-develop
with Cale
```

Cale은 기존 C 생태계를 적으로 보지 않습니다. 대신 C ABI 위에서 더 오래 살아남을 수 있는 분석 가능성, 명시적 의미론, UB 추적, debugger bridge를 쌓습니다.

