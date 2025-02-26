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
    // Disable all the stylelistic rules that sass-guidelines adds so that prettier can control them
    '@stylistic/block-opening-brace-space-before': null,
    '@stylistic/color-hex-case': null,
    '@stylistic/declaration-bang-space-after': null,
    '@stylistic/declaration-bang-space-before': null,
    '@stylistic/declaration-block-semicolon-newline-after': null,
    '@stylistic/declaration-block-semicolon-space-before': null,
    '@stylistic/declaration-block-trailing-semicolon': null,
    '@stylistic/declaration-colon-space-after': null,
    '@stylistic/declaration-colon-space-before': null,
    '@stylistic/function-comma-space-after': null,
    '@stylistic/function-parentheses-space-inside': null,
    '@stylistic/indentation': null,
    '@stylistic/media-feature-parentheses-space-inside': null,
    '@stylistic/no-missing-end-of-source-newline': null,
    '@stylistic/number-leading-zero': null,
    '@stylistic/number-no-trailing-zeros': null,
    '@stylistic/selector-list-comma-newline-after': null,
    '@stylistic/string-quotes': null,
  },
  ignoreFiles: ['node_modules', 'bin', 'obj', '*.*', '!*.css', '!*.scss'],
};
