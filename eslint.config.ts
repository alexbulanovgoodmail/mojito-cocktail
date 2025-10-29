import { globalIgnores } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    files: ['**/*.{ts,js,mts,cts}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  globalIgnores(['node_modules/**', 'dist/**', 'dist-ssr/**', 'coverage/**']),
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
]
