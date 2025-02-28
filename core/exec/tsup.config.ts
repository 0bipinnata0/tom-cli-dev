import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: false,
  clean: true,
  shims: true,
  dts: true,
  format: ["esm", "cjs"],
  minify: false,
  bundle: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  outDir: "dist",
  //   platform: "node",
});
