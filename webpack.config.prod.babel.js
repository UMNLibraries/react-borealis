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
            plugins: [
              'transform-react-remove-prop-types',
            ],
          },
        },
      },
    ],
  },
  context: resolve('src'),
  entry: ['babel-polyfill', './react-borealis.js'],
  devtool: 'cheap-module-source-map',
  output: {
    path: resolve('dist'),
    filename: 'react-borealis-min.js',
    library: 'react-borealis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
