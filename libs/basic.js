module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: [
    '.umi',
    '.umi-production',
    '*.min.*',
    'dist',
    'output',
    'coverage',
    'public',
    'temp',
    '__snapshots__',
    // dumi
    'docs-dist',
    '.dumi/tmp',
    '.dumi/tmp-test',
    '.dumi/tmp-production',
    'tmp',
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
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      // for javascript
      typescript: {
        project: ['./**/tsconfig.json', './**/jsconfig.json'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.mjs'],
  },
  rules: {
    // prettier 配置
    'prettier/prettier': 'warn',
    'no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_' }],
    'import/no-named-as-default': 'off',
    // 使用单成员导出
    'import/no-named-as-default-member': 'off',
    // async 必须有 await
    'require-await': 'warn',
    // generator 函数必须有 yield
    'require-yield': 'warn',
    // 不要有 shadow 变量
    'no-shadow': 'error',
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-rest-params': 'warn',
    'no-empty-pattern': 'warn',
    'no-control-regex': 'warn',

    // // import 排序
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages. `react` related packages come first.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['react', 'react-dom', '^react', 'umi', 'dumi', '^@?\\w'],
          // Side effect imports.
          ['^\\u0000'],
          ['^@/\\w'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          [
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          // Style imports.
          ['^.+\\.(scss|sass|less|css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
}
