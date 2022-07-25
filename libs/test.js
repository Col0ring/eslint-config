module.exports = {
  extends: ['./basic'],
  overrides: [
    {
      files: ['*.{test,spec}.{js,jsx,ts,tsx}'],
      plugins: ['jest'],
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
