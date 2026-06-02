---
title: Lacail
description: Cale artifact와 일반 debug binary를 함께 읽는 독립 debugger 프로젝트
---

## Cale 내부 도구가 아닌 독립 debugger

Lacail은 Cale workspace 안에 있지만 Cale 내부 모듈이 아닙니다. `lacail/Makefile`만으로 build와 check가 가능하고, Cale frontend/backend 내부 헤더나 자료구조에 의존하지 않습니다.

## 현재 성장 단계

Lacail은 이미 다음 바닥 계층을 갖추기 시작했습니다.

- Mach-O object/file/symbol reader
- DWARF line table reader
- process/platform launch model
- Cale debug bundle과 semantic trace 소비
- source anchor와 runtime compare report

## 장기 목표

Lacail은 LLDB/GDB처럼 native debugging을 제공하면서, Cale artifact가 있을 때는 FIR/BCIR/SolIR value, UB fact, source anchor를 함께 설명하는 의미론 debugger로 성장할 예정입니다.

