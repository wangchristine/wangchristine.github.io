module.exports = {
  root: true,
  env: {
    es2023: true,
  },
  plugins: ["vue", "import"],
  extends: ["plugin:vue/vue3-strongly-recommended", "@nuxt/eslint-config", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
  },
  rules: {
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
