module.exports = {
  printWidth: 40,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@utils/(.*)$',
    '^@assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
