export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: ['node_modules/**', 'dist/**', 'dist-ssr/**', 'coverage/**'],
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'media-query-no-invalid': null,
    'scss/at-rule-no-unknown': null,
    'declaration-property-value-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
  },
}
