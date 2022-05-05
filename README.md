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
    // extends: ["col0ring"]
}
```
if you need a  separate configuration:
```js
// .eslintrc.js
module.exports = {
    // js ts and react
    extends: ["@col0ring/eslint-config/basic","@col0ring/eslint-config/typescript","@col0ring/eslint-config/react"]
}
```
