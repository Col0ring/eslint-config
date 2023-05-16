module.exports = {
  extends: ['./basic'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: ['./**/tsconfig.json', './**/jsconfig.json'],
          },
        },
        'import/extensions': ['.ts', '.tsx', '.d.ts'],
      },
      rules: {
        // 关闭 eslint 的，使用 @typescript-eslint 的
        'no-shadow': 'off',
        // 使用 ts 自带的默认导出检测
        'import/default': 'off',
        '@typescript-eslint/no-shadow': 'error',
        // 是否为空函数
        '@typescript-eslint/no-empty-function': 'off',
        // 是否为空接口
        '@typescript-eslint/no-empty-interface': [
          'warn',
          {
            // 允许单独的 interface extends，不要自动转换为 type
            allowSingleExtends: true,
          },
        ],
        // ts 注释
        '@typescript-eslint/ban-ts-comment': [
          'error',
          { 'ts-ignore': 'allow-with-description' },
        ],
        // 不允许 any
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { vars: 'all', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              '{}': false,
            },
            extendDefaults: true,
          },
        ],
      },
    },
  ],
}
