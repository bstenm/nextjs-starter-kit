import nextVitals from "eslint-config-next/core-web-vitals";
import importPlugin from "eslint-plugin-import";
import cypressPlugin from "eslint-plugin-cypress";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import eslintNextPlugin from "@next/eslint-plugin-next";
import storybookPlugin from "eslint-plugin-storybook";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

const tsConfig = defineConfig([
    ...nextVitals,
    {
        // Override default ignores of eslint-config-next.
        ignores: [
            // Default ignores of eslint-config-next:
            ".next/**",
            "out/**",
            "build/**",
            // Custom ignores
            "next-env.d.ts",
            "node_modules",
            "!.storybook",
            "next-env.d.ts",
            "backup"
        ],
        plugins: {
            next: eslintNextPlugin,
            import: importPlugin,
            cypress: cypressPlugin,
            prettier: prettierPlugin,
            storybook: storybookPlugin,
            "@typescript-eslint": typescriptPlugin
        },
        rules: {
            "react/no-unstable-nested-components": "warn",
            "react/jsx-no-constructed-context-values": "warn",
            "@typescript-eslint/no-shadow": "error",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/no-use-before-define": "error",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-namespace": "off",
            "import/no-extraneous-dependencies": [
                "error",
                {
                    devDependencies: true
                }
            ],
            "prettier/prettier": ["warn"]
        }
    }
]);

export default tsConfig;
