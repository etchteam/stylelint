module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-selector-bem-pattern',
  ],
  rules: {
    'selector-class-pattern': null,
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$',
    },
    'max-nesting-depth': 4,
    'order/properties-alphabetical-order': true,
    'selector-no-qualifying-type': [
      true,
      { ignore: ['attribute'], severity: 'warning' },
    ],
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
  },
  ignoreFiles: ['node_modules', 'bin', 'obj', '*.*', '!*.css', '!*.scss'],
};
