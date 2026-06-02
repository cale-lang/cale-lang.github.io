---
title: Compiler
description: SIR, FIR, BCIR, and Sol
---

## Layered contracts

Cale does not place every responsibility into one large IR. Each compiler layer has a narrow contract.

- SIR preserves source semantics.
- FIR provides backend-independent SSA-like structure with facts and source anchors.
- BCIR gives backends a stable ABI and object contract.
- Sol is the current backend consumer for assembly, object, and link paths.

This separation makes it easier to locate semantic loss, ABI mismatch, and UB-sensitive lowering bugs.

