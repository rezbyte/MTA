module.exports = {
  env: {
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:react-native/all", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-native"],
  rules: {},
}
