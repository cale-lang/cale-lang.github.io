---
title: 컴파일러 구조
description: SIR, FIR, BCIR, Sol로 이어지는 Cale compiler pipeline
---

## 하나의 거대한 IR 대신 여러 계약

Cale은 frontend와 backend 사이에 하나의 거대한 IR을 두지 않습니다. 각 계층은 다른 책임을 갖습니다.

## SIR

SIR은 source semantic을 보존하는 계층입니다. C source는 SIR-CL에서 C-compatible 의미론을 유지하고, Cale source는 장기적으로 SIR-HL에서 class, impl, generic, ownership-like state 같은 고수준 의미론을 보존합니다.

## FIR

FIR은 Fused SSA IR입니다. block parameter와 edge argument를 사용하며, memory/effect, source anchor, UB fact를 보존하는 backend-independent IR입니다.

## BCIR

BCIR은 backend contract IR입니다. source 의미론 전체를 품기보다 backend가 소비해야 하는 ABI, data object, relocation, call ABI, control-flow 계약을 안정적으로 제공합니다.

## Sol

Sol은 현재 active backend입니다. BCIR을 받아 target ABI와 assembly/object/link 경로로 낮춥니다. Sol은 optimizer가 아니라 backend consumer이며, source 의미 보존 최적화는 Afterburner가 담당합니다.

## 왜 나누는가

C compiler가 커질수록 어느 단계에서 의미론이 사라졌는지 찾기 어려워집니다. Cale은 SIR/FIR/BCIR/Sol의 경계를 명확히 해서 bug, UB, ABI mismatch를 더 빠르게 분류하려 합니다.

