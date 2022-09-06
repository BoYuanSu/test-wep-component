/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    '@sientech/frontend/lib/vue3-essential',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    'vue/setup-compiler-macros': true,
  },
}
