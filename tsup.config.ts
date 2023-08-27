import { defineConfig } from 'tsup'

export default defineConfig([{ entry: ['core/index.tsx'], format: ['cjs', 'esm'], dts: true }])
