import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        process: "readonly", // ✅ Define 'process' como global (substitui env: node)
        __dirname: "readonly", // Se precisar de __dirname
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "prettier": prettierPlugin,
    },
    rules: {
      "prettier/prettier": ["error", { singleQuote: true, semi: false }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    },
  },
  {
    files: ["**/*.spec.ts", "**/*.test.ts", "**/*.e2e-spec.ts"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        beforeEach: "readonly",
        expect: "readonly",
        process: "readonly"
      }
    }
  },
  prettier,
];
