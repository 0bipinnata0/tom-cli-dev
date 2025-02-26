import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ['cjs'],
  minify: true,
  bundle: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  outDir: 'dist',
  platform: 'node',
})