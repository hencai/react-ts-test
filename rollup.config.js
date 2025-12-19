import { defineConfig } from 'rollup';
import pkg from './package.json' with { type: 'json' };
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  input: {
    main1: 'src/main.js',
    main2: 'src/main2.js',
    // html: 'index.html',
  },
  // input: ['index.html'],
  output: {
    format: 'esm',
    dir: 'dist',
    entryFileNames: 'bundle-[name].js',
    plugins: [
      terser({
        // compress: {
        //   drop_console: true,
        //   drop_debugger: true,
        // },
      }),
    ],
  },

  // [
  //   {
  //     // file: 'bundle.js',
  //     // dir: 'dist',
  //     format: 'esm',
  //     // plugins: [resolve()],
  //   },
  //   // {
  //   //   file: 'bundle.min.js',
  //   //   format: 'iife',
  //   //   name: 'version',
  //   //   plugins: [terser()],
  //   // },
  // ],
  // external: Object.keys(pkg.dependencies),
  logLevel: 'warn',
  plugins: [resolve(), json(), babel({ babelHelpers: 'bundled' }), commonjs()],
});
