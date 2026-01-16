// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    ignores: ["**/*.html"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",

        {
          accessibility: "off",
          overrides: {
            methods: "explicit",
            properties: "off",
            accessors: "off",
            constructors: "off",
            parameterProperties: "off",
          },
        },

      ],
      "no-restricted-syntax": [
        "error",
        {
          selector: "Decorator[expression.callee.name='ViewChild']",
          message:
            "Avoid @ViewChild. Prefer directives or component APIs."
        }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@angular-eslint/component-selector": "off",
      '@typescript-eslint/consistent-type-definitions': 'off',
      "@angular-eslint/template/prefer-control-flow": "off",
      "@angular-eslint/template/click-events-have-key-events": "off"
    },
  }
]);
