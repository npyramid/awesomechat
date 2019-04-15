module.exports = {
  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/extensions": [
      "error",
      "always",
      {
        "js": "never",
        "vue": "never"
      }
    ],
    "object-curly-newline": "off",
    "no-useless-escape": "off",
    "prefer-destructuring": "off"
  },

  overrides: [
    {
      "files": [
        "*.vue"
      ],
      "rules": {
        "indent": "off",
        "vue/script-indent": [
          "error",
          2,
          {
            "baseIndent": 1
          }
        ]
      }
    }
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  root: true,
};
