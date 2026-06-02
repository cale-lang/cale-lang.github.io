---
title: Cale 언어
description: C lane과 Cale lane의 언어 방향
---

## C를 받아들이되 그대로 멈추지 않는다

Cale은 두 언어 lane을 함께 키웁니다.

## C lane

C lane은 기존 C source, header, ABI, system library를 가능한 한 그대로 받아들이는 경로입니다. 목표는 C99/C11/C17/C23과 GNU/Clang 계열 확장을 단계적으로 닫아 가며, 기존 C 프로젝트가 Cale compiler 안에서 분석 가능한 의미론을 갖게 하는 것입니다.

## Cale lane

Cale lane은 새 Cale source를 위한 경로입니다. C와 같은 시스템 프로그래밍 영역을 겨냥하지만, 위험한 동작을 조용히 상속하지 않습니다.

초기 방향은 다음과 같습니다.

- nullable과 non-null boundary
- slice와 bounds-aware view
- `defer`, cleanup, deinit 후보
- ownership-like state와 move intent
- class, impl, generic
- richer enum과 modern switch
- UB category별 policy control

## UB 정책

Cale은 `allow`와 `assume`을 분리합니다. 위험한 동작을 허용할 수는 있지만, 그것이 곧 optimizer assumption이 되지는 않습니다. 이 차이는 Cale이 C와 공존하면서도 더 분석 가능한 컴파일러가 되기 위한 핵심입니다.

