const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const jsReg = /\.(js)$/;

module.exports = {
  entry: paths.src + '/index.js',
  output: {
    publicPath: isDev ? '/' : './',
    path: paths.build,
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk.[id].js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': paths.src,
    },
  },
  devServer: {
    static: {
      directory: paths.build,
    },
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: jsReg,
        include: paths.src,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
      inject: 'body',
    }),
  ],
};
