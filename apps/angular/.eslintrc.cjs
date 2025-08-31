module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*', 'dist/', 'node_modules/'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['plugin:@angular-eslint/recommended'],
      parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
    },
  ],
};

