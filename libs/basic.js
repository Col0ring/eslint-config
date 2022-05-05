module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: [
    '*.min.*',
    'dist',
    'output',
    'coverage',
    'public',
    'temp',
    '__snapshots__',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      // for javascript
      typescript: {
        project: ['./**/jsconfig.json'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.mjs'],
  },
  rules: {
    // prettier 配置
    'prettier/prettier': 'warn',
    'no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_' }],
    // async 必须有 await
    'require-await': 'warn',
    // generator 函数必须有 yield
    'require-yield': 'warn',
    // 不要有 shadow 变量
    'no-shadow': 'error',
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
}
