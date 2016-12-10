module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
    ],
	"env": {
		"browser": true,
		"node": true,
    },
    "rules": {
        // CUSTOM STYLE
        "semi": ["error", "never"],
        "indent": ["error", "tab"],
        "new-cap": ["off"], // Because Immutable.js
        "quotes": ["error", "double", "avoid-escape"],
        "quote-props": ["off"],
        "dot-notation": ["off"],
        "max-len": ["warn", { "code": 150 }],
        "no-console": ["off"],
        "no-underscore-dangle": ["off"],
        "no-duplicate-imports": ["error"],
        "no-tabs": ["off"],
        "one-var": ["off"],
        "one-var-declaration-per-line": ["off"],
        "no-else-return": ["error"],
        "radix": ["off"],
        "generator-star-spacing": ["error", "after"],
        "vars-on-top": ["error"],
        "no-unused-expressions": ["error"],
        "no-prototype-builtins": ["error"],
        "no-unused-vars": ["warn"],
        "default-case": ["error"],
        "func-names": ["error"],
        "no-mixed-operators": ["error"],
        "no-var": ["error"],
        "object-shorthand": ["error"],
        "object-curly-spacing": ["warn"],
        "prefer-template": ["warn"],
        "prefer-const": ["error"],
        "padded-blocks": ["off"],
        "spaced-comment": ["off"],
        "arrow-body-style": ["off"],
        "class-methods-use-this": ["warn"],
        // IMPORT
        "import/extensions": ["off"],
        "import/prefer-default-export": ["warn"],
        "import/imports-first": ["warn"],
        "import/no-absolute-path": ["warn"],
        // REACT
        "react/jsx-indent": ["error", "tab"],
        "react/jsx-indent-props": ["error", "tab"],
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }], // file ext. that may contain JSX
        "react/prop-types": ["warn"],
        "react/jsx-space-before-closing": ["warn"],
        "react/sort-comp": ["warn"],
        "react/no-find-dom-node": ["warn"],
        "react/no-string-refs": ["warn"],
        "react/prefer-stateless-function": ["warn"],
        "react/prefer-es6-class": ["warn"],
        "react/forbid-prop-types": ["off"],
        // JSX-ALLY
        "jsx-a11y/img-has-alt": ["off"],
        "jsx-a11y/href-no-hash": ["warn"],
    },
	"globals": {
        // GLOBAL OBJECTS
	}
};