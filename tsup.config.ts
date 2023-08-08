// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'tsup'

export default defineConfig([
  // Core library
  {
    entry: ['core/index.tsx'],
    format: ['cjs', 'esm'],
    dts: true,
  },
])
