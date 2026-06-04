---
title: SIR/FIR/BCIR/Sol 파이프라인 개요
description: Cale compiler는 source 의미를 잃지 않으면서 낮은 실행 단계로 내려가기 위해 여러 IR 계층을 둡니다.
pubDate: 2026-06-04
category: compiler
tags:
  - SIR
  - FIR
  - BCIR
  - Sol
lang: ko
---

Cale compiler의 파이프라인은 C source를 곧바로 낮은 코드로 밀어 넣지 않습니다. source 구조와 의미를 가능한 한 추적 가능한 형태로 남기면서 낮은 단계로 내려가는 것을 목표로 합니다.

SIR은 source에 가까운 중간 표현입니다. C source에서 온 구조를 잃지 않고 다음 단계로 넘기는 역할을 합니다.

FIR은 제어 흐름과 값 흐름을 더 명시적으로 다룹니다. C의 애매한 실행 의미를 분석 가능한 형태로 정리하기 위한 중간 단계입니다.

BCIR은 backend와 codegen에 가까운 표현입니다. 이후 Sol은 더 낮은 실행 의미와 연결되는 쪽으로 내려갑니다.

이 계층을 분리하는 이유는 단순한 구현 취향이 아닙니다. 나중에 Lacail이 source line, symbol, IR value, debug bundle, UB fact를 다시 연결하려면 컴파일러가 중간 단계에서 의미의 흔적을 보존해야 합니다.
