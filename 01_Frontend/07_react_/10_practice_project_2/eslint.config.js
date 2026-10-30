import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  // Ignore files and directories
  {
    ignores: ["node_modules/**", "dist/**"],
  },

  // JavaScript and React configuration
  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      react,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // JavaScript recommended rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...react.configs.flat.recommended.rules,

      "react/prop-types": "off",

      // Custom rules
      "no-undef": "error",
      "no-unused-vars": "warn",

      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
];
