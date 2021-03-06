module.exports = {
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:testing-library/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "html",
        "jest-dom",
        "testing-library"
    ],
    "rules": {
        "quotes": ["error", "double"]
    }
};