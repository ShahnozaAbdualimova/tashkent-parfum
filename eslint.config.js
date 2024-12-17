import pluginNuxt from 'eslint-plugin-nuxt';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        definePageMeta: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  pluginNuxt.configs.recommended, // Add Nuxt plugin config
  {
    rules: {
      'vue/multi-word-component-names': ['off'],
    },
  },
];
