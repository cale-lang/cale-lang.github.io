---
title: Getting Started
description: How to approach Cale today
---

## Current status

Cale is still under active development. Public binary releases are planned, but this skeleton site does not ship compiler downloads yet.

:::note[What this site is for]
This site documents Cale's current shape, design direction, and subprojects. It does not provide binary downloads yet.
:::

## Build from source

```sh
git clone https://github.com/GungYe918/cale.git
cd cale
make
```

Lacail can be checked as a standalone project:

```sh
make -C lacail check
```

## Releases

Future downloads will use GitHub Releases with platform-specific artifacts, checksums, and release notes.

:::caution[Before releases]
The commands here target the development repository. Build flags, targets, and artifact names may change before the first stable release.
:::
