import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

import stylistic from '@stylistic/eslint-plugin';
import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylisticJsx from '@stylistic/eslint-plugin-jsx';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  stylistic.configs['recommended-flat'],
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 配置所有通用规则
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // eslint插件 全局规则
      'no-empty': 'warn',
      'no-unused-vars': 'off',
      'quotes': ['error', 'single'],

      // tslint插件 全局规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      "@typescript-eslint/no-unsafe-function-type": "warn",

      // pluginReact 插件全局配置
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // stylelistic 插件 全局规则
      '@stylistic/semi': ['error', 'always'],
    },
  },

  // js 文件风格配置  代替的是 eslint 中的风格配置
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
    },
  },

  // ts 文件单独代码风格配置  代替的是 @typescript-eslint/eslint-plugin  中的风格配置
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylistic/ts': stylisticTs,

    },
    rules: {
    },
  },

  // jsx 文件代码风格配置  代替的是 eslint-plugin-react 中的风格配置
  {
    files: ['**/*.{jsx}'],
    plugins: {
      '@stylistic/jsx': stylisticJsx,
    },
    rules: {
    },
  },
];
