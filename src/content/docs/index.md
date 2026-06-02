---
title: Cale
description: C ABI와 공존하는 시스템 언어와 컴파일러 프로젝트
template: splash
hero:
  tagline: C ABI와 함께 움직이는 시스템 언어/컴파일러입니다. C source를 받아들이는 lane에서 시작해, 의미를 보존하는 IR과 Lacail debugger로 낮은 수준의 코드를 더 잘 설명하는 쪽으로 자라고 있습니다.
  actions:
    - text: 시작하기
      link: /getting-started/
      variant: primary
    - text: 컴파일러 구조
      link: /compiler/
      variant: secondary
---

## 지금의 Cale

Cale은 C를 버리는 프로젝트가 아닙니다. C ABI, 낮은 런타임 의존성, OS와 커널 친화성을 유지하면서 위험한 기본값을 컴파일러가 이해할 수 있는 의미론으로 끌어올리는 것이 목표입니다.

현재 Cale은 아이디어 문서만 있는 언어가 아니라, C source를 SIR/FIR/BCIR/Sol 경로로 낮추는 실제 컴파일러 파이프라인을 갖추고 있습니다. 아직 Clang 대체재라고 부르기에는 이르지만, 실전 C 프로젝트를 통과하기 시작한 시스템 컴파일러로 성장하고 있습니다.

## 프로젝트 지도

- **Language**: 기존 C source와 ABI를 받아들이는 C lane, 더 명시적인 저수준 의미론을 향한 Cale lane
- **Compiler**: source 의미를 잃지 않고 SIR, FIR, BCIR, Sol로 내려가는 파이프라인
- **Lacail**: Cale artifact와 일반 debug binary를 함께 읽는 독립 debugger
- **Qstar**: Cale 주변 도구와 실험을 담는 별도 프로젝트
- **Releases**: 실제 binary 배포는 GitHub Releases 기반으로 준비 예정

## 다음 목표

Cale은 기존 C 생태계를 적으로 보지 않습니다. 대신 C ABI 위에서 더 오래 살아남을 수 있는 분석 가능성, 명시적 의미론, UB 추적, debugger bridge를 쌓습니다. 이 사이트는 당장은 문서와 상태를 정리하는 장소이며, 실제 다운로드는 릴리즈 체계가 준비된 뒤 제공됩니다.
