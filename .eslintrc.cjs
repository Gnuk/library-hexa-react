/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', {avoidEscape: true}],
    'no-unused-vars': ['error', {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "caughtErrorsIgnorePattern": "^_"
    }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 140,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'lf',
        arrowParens: 'avoid',
        bracketSameLine: false,
        xmlWhitespaceSensitivity: 'ignore',
        trailingComma: 'es5',
      },
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }],
      },
    },
  ],
}
