module.exports = {
    env: {
        es2021: true,
        node: true,
        "react-native/react-native": true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-native/all",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.eslint.json"],
        react: {
            version: "detect",
        },
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "react-native", "@typescript-eslint"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
        "import/extensions": ["error", "never"],
        "react/jsx-uses-react": "off", // Not required since React 17
        "react/react-in-jsx-scope": "off",
    },
};
