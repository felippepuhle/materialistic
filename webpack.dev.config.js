/* eslint-disable */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotEnv = require('dotenv-webpack');
const path = require('path');

const common = require('./webpack.common');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';

module.exports = {
  devtool: process.env.SOURCE_MAP ? 'source-map' : 'cheap-eval-source-map',
  entry: ['react-hot-loader/patch', common.entry],
  output: Object.assign({}, common.output, {
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js',
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  }),

  module: {
    rules: [common.loaders.babel, common.loaders.assets],
  },

  devServer: {
    contentBase: common.paths.build,
    noInfo: true,
    hot: true,
    hotOnly: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(common.plugins.html),
    new dotEnv(common.plugins.dotEnv),
    new webpack.NamedModulesPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
