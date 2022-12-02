module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-loss-of-precision": "off",
        "no-nonoctal-decimal-escape": "off",
        "no-unsafe-optional-chaining": "off",
        "no-useless-backreference": "off"
    }
}
