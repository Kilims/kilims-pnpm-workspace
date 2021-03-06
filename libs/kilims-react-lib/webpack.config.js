module.exports = {
  entry: './components/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: require.resolve('babel-loader'),
        query: {
          cacheDirectory: true,
          plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: "es", style: true }, "fix-antd-imports"],
            ['import', { libraryName: 'antd-mobile', libraryDirectory: "es", style: true }, "fix-antd-mobile-imports"],
          ],
        },
      },
      {
        test: /\.(css|less)?$/,
        use: [
          { loader: require.resolve('style-loader') },
          { loader: require.resolve('css-loader') },
          {
            loader: require.resolve('less-loader'),
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: { '@primary-color': '#42b983' },
              },
            },
          },
        ],
      },
      {
        test: /\.png?$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
