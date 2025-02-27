import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  sourcemap: false,
  clean: true,
  shims: true,
  dts: false,
  format: ["esm"],
  minify: false,
  bundle: true,
  treeshake: true,
  skipNodeModulesBundle: true,
  outDir: "dist",
  //   platform: "node",
});
