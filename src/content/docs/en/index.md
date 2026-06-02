---
title: Cale
description: A systems language and compiler project designed to coexist with the C ABI
template: splash
hero:
  tagline: Cale is a systems language and compiler project that moves with the C ABI. It starts from a C-compatible lane, preserves source meaning through its IR pipeline, and grows toward debugger-backed semantic analysis.
  actions:
    - text: Get Started
      link: /en/getting-started/
      variant: primary
    - text: Compiler Pipeline
      link: /en/compiler/
      variant: secondary
---

## Cale today

Cale is not a project about discarding C. It keeps the parts that made C useful for systems work: a simple ABI, low runtime dependency, and compatibility with operating systems, kernels, and embedded environments.

The goal is to lift dangerous defaults into explicit compiler semantics. Cale is currently a real compiler pipeline, not only a language idea: C source can flow through SIR, FIR, BCIR, and Sol.

## Project map

- **Language**: a C lane for existing source and ABI, and a Cale lane for more explicit low-level semantics
- **Compiler**: a source-preserving pipeline through SIR, FIR, BCIR, and Sol
- **Lacail**: an independent debugger for Cale artifacts and ordinary debug binaries
- **Qstar**: a separate project for adjacent tools and experiments
- **Releases**: future binaries distributed through GitHub Releases

## Next step

This site is currently the documentation and status home for Cale. It will point to real binary downloads once the release process is ready.
