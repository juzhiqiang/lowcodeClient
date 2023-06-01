module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "standard-jsx"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
  },
};
