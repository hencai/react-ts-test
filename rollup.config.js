import { defineConfig } from 'rollup';
import pkg from './package.json' with { type: 'json' };
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: 'src/components/1115.ts',
  output: [
    {
      file: 'bundle.js',
      format: 'esm',
    },
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()],
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [json()],
});
