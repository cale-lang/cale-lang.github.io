---
title: Cale
description: A systems language and compiler project designed to coexist with the C ABI
template: splash
hero:
  tagline: Cale respects the C ABI and systems ecosystem while building a compiler pipeline with explicit semantics, analyzable IR, and room for safer low-level code.
  actions:
    - text: Get Started
      link: /en/getting-started/
      variant: primary
    - text: Compiler Pipeline
      link: /en/compiler/
---

## A systems project that grows with C

Cale is not a project about discarding C. It keeps the parts that made C useful for systems work: a simple ABI, low runtime dependency, and compatibility with operating systems, kernels, and embedded environments.

The goal is to lift dangerous defaults into explicit compiler semantics. Cale is currently a real compiler pipeline, not only a language idea: C source can flow through SIR, FIR, BCIR, and Sol.

## Current focus

- A C lane for existing C source, headers, ABI, and system libraries
- A Cale lane for more explicit low-level semantics
- A fact-preserving compiler pipeline
- Lacail, an independent debugger that can consume Cale artifacts and ordinary debug binaries
- Future binary distribution through GitHub Releases

