import eslint from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  prettierRecommended,
  eslint.configs.recommended,
  reactHooks.configs.flat['recommended-latest'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {},
    },
    extends: [tseslint.configs.recommended],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {},
  }
);
