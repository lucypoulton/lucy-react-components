import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ['prismjs', 'react'],
    plugins: [
      resolve(),
      commonjs(),
      scss({outputStyle: 'compressed'}),
      typescript({tsconfig: "./tsconfig.json"})
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.s?css$/],
    plugins: [dts()],
  },
];

export default config;