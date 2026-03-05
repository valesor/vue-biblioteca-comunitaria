import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      ...vue.configs['vue3-essential'].rules,
      ...prettier.rules,
    },
  },
];
