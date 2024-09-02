
import stylisticTs from '@stylistic/eslint-plugin-ts';
import stylistic from '@stylistic/eslint-plugin';


export default {
  files: [
    '**/*.ts',
    '**/*.cts',
    '**.*.mts',
    '**/*.js',
    '**/*.mjs',
    '**/*.vue',
  ],
  plugins: {
    '@stylistic/ts': stylisticTs,
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/ts/semi': ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-extraneous-dependencies': [
      'error',
    ],
  },
}