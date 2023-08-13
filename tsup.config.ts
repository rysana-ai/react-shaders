import { defineConfig } from 'tsup'

export default defineConfig([
  // Core library
  {
    entry: ['core/index.tsx'],
    format: ['cjs', 'esm'],
    dts: true,
  },
])
