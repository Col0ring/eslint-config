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
        'plugin:testing-library/react'
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
