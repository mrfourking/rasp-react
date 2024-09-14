import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'arrow-body-style': 'off',
      'no-plusplus': 'off',
      'max-len': ['error', 110, 2, { ignoreUrls: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-alert': 'error',
      'no-param-reassign': 'off',
      'react/jsx-pascal-case': 'off',
      'no-prototype-builtins': 'off',
      'react/jsx-a11y/anchor-is-valid': 'off',
      'react/no-did-update-set-state': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-handler-names': 'off',
      'array-callback-return': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-unused-vars': 'warn',
      'default-case': 'off',
      camelcase: ['off'],
      'react/prop-types': 'off',
      'comma-dangle': ['error', 'never']
    },
  },
)
