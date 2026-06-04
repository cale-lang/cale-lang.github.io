# Cale Documentation Index

Canonical site: <https://cale.tools/>

Cale is a C-compatible systems language and compiler project. The public documentation is organized around source build usage, C ABI coexistence, compiler IR lowering, standalone debugging through Lacail, and future GitHub Releases based distribution.

## Main Entry Points

- Home: <https://cale.tools/>
- Docs hub: <https://cale.tools/docs/>
- Install: <https://cale.tools/install/>
- Blog: <https://cale.tools/blog/>
- Getting Started: <https://cale.tools/getting-started/>
- Releases: <https://cale.tools/releases/>

## Core Documentation

- Language: <https://cale.tools/language/>
- Compiler Pipeline: <https://cale.tools/compiler/>
- Lacail Debugger: <https://cale.tools/lacail/>
- Qstar: <https://cale.tools/qstar/>

## English Pages

- Home: <https://cale.tools/en/>
- Docs hub: <https://cale.tools/en/docs/>
- Install: <https://cale.tools/en/install/>
- Getting Started: <https://cale.tools/en/getting-started/>
- Language: <https://cale.tools/en/language/>
- Compiler: <https://cale.tools/en/compiler/>
- Lacail: <https://cale.tools/en/lacail/>
- Qstar: <https://cale.tools/en/qstar/>
- Releases: <https://cale.tools/en/releases/>

## Japanese Placeholder Pages

- Home: <https://cale.tools/ja/>
- Docs hub: <https://cale.tools/ja/docs/>
- Install: <https://cale.tools/ja/install/>
- Getting Started: <https://cale.tools/ja/getting-started/>
- Language: <https://cale.tools/ja/language/>
- Compiler: <https://cale.tools/ja/compiler/>
- Lacail: <https://cale.tools/ja/lacail/>
- Qstar: <https://cale.tools/ja/qstar/>
- Releases: <https://cale.tools/ja/releases/>

## Topic Map

- C lane: compatibility path for C source and the C ABI.
- Cale lane: long-term language direction above the C-compatible base.
- SIR: source-oriented intermediate representation.
- FIR: flow/value-oriented intermediate representation.
- BCIR: backend-facing intermediate representation.
- Sol: lower-level execution-oriented representation.
- UB facts: records for undefined-behavior evidence and diagnostics.
- Semantic trace: source-to-IR-to-low-level evidence chain.
- Debug artifact contract: file-oriented input contract for Lacail.
- Lacail: standalone debugger that can work with ordinary executable/DWARF inputs and become stronger when Cale artifacts exist.

## Integration Boundaries

Public consumers should prefer files and schemas over Cale internal headers:

- executable
- object file
- DWARF
- source map
- debug bundle JSON
- semantic trace
- runtime report
- UB report

## Crawl And AI Entry Points

- llms.txt: <https://cale.tools/llms.txt>
- RSS feed: <https://cale.tools/rss.xml>
- JSON feed: <https://cale.tools/feed.json>
- robots.txt: <https://cale.tools/robots.txt>
- crawler-policy.yml: <https://cale.tools/crawler-policy.yml>
- sitemap index: <https://cale.tools/sitemap-index.xml>
