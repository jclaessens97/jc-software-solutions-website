/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: false,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [
  ],
  rules: {},
};
