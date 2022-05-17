module.exports = {
  extends: [
    './basic',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 如果没有 children 需要自动为单标签
    'react/self-closing-comp': 'error',
    // 使用 jsx 时必须有 React 引入
    'react/react-in-jsx-scope': 'off',
    // 绑定 click 事件必须有 keyboard 事件
    'jsx-a11y/click-events-have-key-events': 'off',
    // 静态元素必须有 role 属性
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
}
