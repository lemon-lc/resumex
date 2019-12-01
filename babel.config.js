module.exports = {
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/core',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: 'esm',
        camel2DashComponentName: false,
      },
      'core',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@material-ui/icons',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        libraryDirectory: 'esm',
        camel2DashComponentName: false,
      },
      'icons',
    ],
  ],
  presets: [
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
      },
    ],
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
};
