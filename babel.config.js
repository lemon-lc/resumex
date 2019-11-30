module.exports = {
  plugins: [
    // antd 按需加载
    [
      'import',
      {
        libraryName: 'antd',
        style: true, // `style: true` 会加载 less 文件
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-typescript",
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
