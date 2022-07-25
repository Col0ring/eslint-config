# @col0ring/eslint-config

Col0ring's Eslint Config Presets.

## Install

```sh
npm install eslint @col0ring/eslint-config -D
# or
yarn add eslint @col0ring/eslint-config -D
```

## Usage

```js
// .eslintrc.js
module.exports = {
  // js,ts and react
  extends: ['@col0ring/eslint-config'],
  // or
  // extends: ["@col0ring"]
}
```

If you need a separate configuration:

```js
// .eslintrc.js
module.exports = {
  // js ts and react
  extends: [
    '@col0ring/eslint-config/basic',
    '@col0ring/eslint-config/typescript',
    '@col0ring/eslint-config/react',
    // test env, not in the default configuration
    '@col0ring/eslint-config/test',
  ],
}
```

This config has built-in prettier, you need to create a prettier.config.js file and set the following configuration：

```js
// prettier.config.js
module.exports = require('@col0ring/prettier-config')()
```

See More: [@col0ring/prettier-config](https://github.com/col0ring/prettier-config)
