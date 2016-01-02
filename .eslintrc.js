module.exports = {
  "globals": {
    "React": true,
  },
  "rules": {
    "indent": [
      0,
      2
    ],
    "quotes": [
      2,
      "double"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
  },
  "env": {
    "es6": true,
    "browser": true,
    "commonjs": true,
    "jquery": true,
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "experimentalObjectRestSpread": true,
    "modules": true,
    "module": true,
    "require": true,
  },
  "plugins": [
    "react",
  ]
};