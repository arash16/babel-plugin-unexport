# babel-plugin-unexport

> This plugin allows Babel to remove export directives, declaration will remain.

## Example

**In**

```javascript
export function fname() {
}
```

**Out**

```javascript
function fname() {
}
```

## Installation

```sh
npm install --save-dev babel-plugin-unexport
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["unexport"]
}
```

### Via CLI

```sh
babel --plugins unexport script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["unexport"]
});
```
