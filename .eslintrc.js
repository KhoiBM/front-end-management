module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"

    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-extra-semi": "error",
        "no-unused-vars": "off"
    }
};

// "ecmaVersion": 12,