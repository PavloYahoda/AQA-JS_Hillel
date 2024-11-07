import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser, // Adds browser-specific globals (e.g., `window`, `document`)
        ...globals.node, // Adds Node.js-specific globals (e.g., `process`)
        console: 'readonly',
      },
    },

    plugins: {
      react: pluginReact,
      import: pluginImport,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-debugger': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'consistent-return': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'no-use-before-define': ['error', { variables: true, functions: false }],
      'prefer-template': 'error',
      'import/prefer-default-export': 'warn',

      // React-specific rules
      'react/prop-types': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-vars': 'error',
    },
  },
];
