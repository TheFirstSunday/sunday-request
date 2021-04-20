import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "lib/bundle.esm.js",
      format: "es",
    },
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      tsconfig: "tsconfig.json",
      tsconfigOverride: {
        compilerOptions: {
          module: 'ES2015'
        }
      }
    }),
  ],
};
