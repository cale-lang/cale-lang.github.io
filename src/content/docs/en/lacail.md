---
title: Lacail
description: An independent debugger project for Cale artifacts and ordinary debug binaries
---

## Independent by design

Lacail lives in the Cale workspace, but it is not a Cale internal module. It builds through `lacail/Makefile` and consumes files, schemas, executables, DWARF, source maps, semantic traces, and runtime reports.

## Direction

Lacail is growing from object/symbol reading, DWARF line tables, and process launch toward native breakpoints and source-level stop reports.

When Cale artifacts are available, Lacail should become a semantic debugger that can explain source positions through FIR, BCIR, SolIR, and UB facts.

