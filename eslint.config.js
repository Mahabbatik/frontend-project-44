import stylistic from '@stylistic/eslint-plugin';
import js from '@eslint/js';
import globals from 'globals'; // 1. Добавьте этот импорт

export default [
  js.configs.recommended,
  {
    languageOptions: { // 2. Добавьте этот блок
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      'no-console': 'off', 
    },
  },
];