---
title: Lacail을 독립 디버거로 분리하는 이유
description: Lacail은 Cale 내부 모듈이 아니라 executable, DWARF, debug bundle을 읽는 독립 artifact consumer로 자라야 합니다.
pubDate: 2026-06-04
category: lacail
tags:
  - Lacail
  - debugger
  - DWARF
  - semantic trace
lang: ko
---

Lacail은 Cale 내부 debug helper가 아니라 독립 top-level debugger 프로젝트로 키우고 있습니다. 이 경계는 장기적으로 매우 중요합니다.

디버거는 compiler 내부 자료구조에 직접 링크되면 안 됩니다. 좋은 디버거는 executable, object file, symbol table, DWARF, source map, debug bundle 같은 외부 artifact를 읽고 동작할 수 있어야 합니다.

이 구조를 지키면 Lacail은 Cale artifact가 없을 때도 일반 debug binary를 읽는 방향으로 발전할 수 있습니다. 반대로 Cale artifact가 있을 때는 semantic trace, UB fact, source anchor를 더해 일반 debugger보다 깊은 설명을 줄 수 있습니다.

목표는 LLDB를 단순히 흉내 내는 것이 아닙니다. Lacail은 기본적인 stop, symbol, source line 흐름을 갖춘 뒤, Cale의 의미론 분석과 undefined behavior evidence를 source-level debugging 경험에 연결하는 디버거가 되어야 합니다.
