// eslint.config.mjs
import js from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    plugins: {
      js,
      prettier: pluginPrettier
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error'
    },
    ignores: ['node_modules', 'dist', 'coverage'],
    settings: {}
  },
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
]);
