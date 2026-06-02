---
title: Language
description: The C lane and the Cale lane
---

## Two lanes

Cale grows along two language lanes.

The C lane accepts existing C source and keeps C-compatible semantics visible to the compiler.

The Cale lane is for new source code with clearer low-level semantics: nullable boundaries, slices, cleanup intent, ownership-like state, richer enums, generics, and UB policy control.

## UB policy

Cale separates `allow` from `assume`. A low-level operation may be allowed without becoming an optimizer assumption.

