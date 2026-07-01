# isometric-physics

[![Build](https://github.com/TheFujirose/isometric-physics/actions/workflows/build.yml/badge.svg)](https://github.com/TheFujirose/isometric-physics/actions/workflows/build.yml)
[![Docs](https://github.com/TheFujirose/isometric-physics/actions/workflows/docs.yml/badge.svg)](https://thefujirose.github.io/isometric-physics/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Zero-dependency isometric projection math, 2D/3D vector operations, and vessel position integration for TypeScript projects.

## Install

```bash
pnpm add isometric-physics
```

## Usage

```ts
import { isoTransform, vec3Cross, stepVesselPosition } from 'isometric-physics';

const screenPoint = isoTransform(4, 2, 1);
const normal = vec3Cross({ x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 });
const nextPosition = stepVesselPosition({ x: 0, y: 0 }, 12, 90, 0.016, 100);
```

## API

The package exports three small modules:

- `isometric` for projection helpers and compass labels
- `vectors` for 2D and 3D vector math
- `physics` for world-wrapping vessel integration

Full API documentation is generated with Typedoc and published through the docs workflow.

## Development

```bash
pnpm install
pnpm build
pnpm run docs
```