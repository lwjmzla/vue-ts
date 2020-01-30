module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'prettier/prettier': [
      'error',
      {
        // tabWidth: 2,
        // useTabs: false,
        // semi: false,
        singleQuote: true, // ! ''
        // trailingComma: 'none',
        // bracketSpacing: true,
        // jsxBracketSameLine: true,
        arrowParens: 'always', // !总是添加圆括号，示例： (x) => x
        printWidth: 200
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
