module.exports = {
  root: true,
  env: { browser: true, es2023: true, node: true },
  parser: 'vue-eslint-parser',
  parserOptions: { ecmaVersion: 2023, sourceType: 'module' },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  ignorePatterns: ['dist/', 'node_modules/'],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
