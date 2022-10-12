module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  extends: [
    'mantine',
    'next/core-web-vitals',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    // aligns closing brackets for tags
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    // prettier overrides
    'prettier/prettier': ['error', {
      printWidth: 100,
    }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,
      }
    }
  }
}