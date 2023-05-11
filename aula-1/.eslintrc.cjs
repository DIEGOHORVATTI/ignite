module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', "no-loops",],
  rules: {
    "no-console": [
      "warn",
      {
        "allow": ["warn", "error"]
      }
    ],
    'react-refresh/only-export-components': 'warn',
    "import/no-webpack-loader-syntax": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-img-element": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-children-prop": "off",
    "no-use-before-define": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/jsx-key": "off",
    "prettier/prettier": 2,
    "no-loops/no-loops": 2,
    "no-undef": "warn",
    "camelcase": "off",
    "eqeqeq": "off"
  },
}
