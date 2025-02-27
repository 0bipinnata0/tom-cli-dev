import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ["esm", "cjs"],
  bundle: true,
  minify: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  outDir: "./dist",
  external: ["pino"],
});
