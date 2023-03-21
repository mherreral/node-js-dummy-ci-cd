module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['unused-imports', 'etc'],
  extends: ['semistandard', 'prettier'],
  ignorePatterns: ['node_modules/*'],
  rules: {
    'no-console': 'warn',
    'no-empty': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'etc/no-commented-out-code': 'warn',
    'no-unused-vars': ['warn', { args: 'none' }],
  },
};
