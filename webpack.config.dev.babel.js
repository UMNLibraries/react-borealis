import { resolve } from 'path';

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      ReactDOM: 'preact-compat',
    },
  },
  context: resolve('example'),
  entry: ['babel-polyfill', './example.js'],
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-borealis.js',
    publicPath: '/dist/',
    pathinfo: true,
  },
};
