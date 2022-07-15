module.exports = {
  extends: ['./basic'],
  overrides: [
    {
      plugins: ['jest'],
      files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
        'plugin:jest-formatting/recommended',
      ],
      settings: {
        jest: {
          version: require('jest/package.json').version,
        },
      },
      env: {
        'jest/globals': true,
      },
    },
  ],
}
