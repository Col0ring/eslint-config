# @col0ring/eslint-config
Col0ring's Eslint Config Presets.
## Install
```sh
npm install @col0ring/eslint-config -D
# or
yarn add @col0ring/eslint-config -D
```
## Usage
```js
// .eslintrc.js
module.exports = {
    // js,ts and react
    extends: ["@col0ring/eslint-config"]
    // or 
    // extends: ["@col0ring"]
}
```
If you need a  separate configuration:
```js
// .eslintrc.js
module.exports = {
    // js ts and react
    extends: ["@col0ring/eslint-config/basic","@col0ring/eslint-config/typescript","@col0ring/eslint-config/react"]
}
```
This config has built-in prettier, you need to create a .prettierrc file and set the following configuration：
```json
// .prettierrc
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "arrowParens": "always",
  "endOfLine": "lf"
}
```
