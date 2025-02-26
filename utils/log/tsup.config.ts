import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ["cjs"],
  minify: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  outDir: "dist",
  platform: "node",
});
