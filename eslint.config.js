import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Specify the files or patterns that ESLint should lint
    files: ['**/*.js'],
    
    // Language options specify JavaScript version and module type
    languageOptions: {
    globals: {
    window: 'readonly',
    process: 'readonly',
    document: 'readonly', // Added for DOM-related global access
    console: 'readonly', // Added to acknowledge the console object
    // Add more globals as needed
    },
    ecmaVersion: 2022, // Set ECMAScript version (e.g., ES2021)
    sourceType: 'module', // Specify if using ES modules
    },
    
    // Plugins can extend ESLint with custom rules (empty here, can be customized)
    plugins: {
    // Example: 'react' for React projects
    // react: 'eslint-plugin-react',
    },
    
    // Define custom linting rules
    rules: {
    // Enforce the use of strict equality (`===`) for comparisons
    eqeqeq: 'error',
    
    // Warn about the use of `console` (often used in debugging, but not in production)
    'no-console': 'warn',
    
    // Warn about the use of `debugger` statements
    'no-debugger': 'warn',
    
    // Style rules for consistency in formatting
    semi: ['error', 'always'], // Enforce semicolons at the end of statements
    quotes: ['error', 'single'], // Enforce single quotes for strings
    indent: ['error', 2], // Enforce 2-space indentation for better readability
    'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline lists/objects
    
    // Variables-related rules to ensure code quality
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Warn about unused vars, ignore those starting with `_`
    'no-undef': 'error', // Disallow the use of undeclared variables
    
    // Code consistency rules
    'prefer-const': 'error', // Prefer `const` for variables that are not reassigned
    'no-var': 'error', // Disallow `var` in favor of `let` and `const`
    
    // Additional rules for better code quality
    'arrow-parens': ['error', 'as-needed'], // Require parentheses for arrow function parameters only when necessary
    'consistent-return': 'error', // Enforce consistent return statements in functions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Enforce function style
    'no-multiple-empty-lines': ['error', { max: 1 }], // Disallow multiple empty lines
    'object-curly-spacing': ['error', 'always'], // Require spaces inside braces
    'array-bracket-spacing': ['error', 'never'], // Disallow spaces inside brackets
    
    // Best practices
    'no-use-before-define': ['error', { variables: true, functions: false }], // Disallow use of variables before declaration
    'prefer-template': 'error', // Prefer template literals over string concatenation
    'import/prefer-default-export': 'warn', // Prefer default export if there's only a single export
    },
    },
];