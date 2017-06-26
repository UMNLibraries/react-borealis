const webpack = require('webpack');
const {resolve} = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  entry: './example/example.js',
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-borealis.js',
    publicPath: '/dist/',
  },
};