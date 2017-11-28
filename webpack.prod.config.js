/* eslint-disable */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const dotEnv = require('dotenv-webpack');

const common = require('./webpack.common');

module.exports = {
  entry: common.entry,
  output: common.output,

  module: {
    rules: [common.loaders.babel, common.loaders.assets],
  },

  plugins: [
    new dotEnv(common.plugins.dotEnv),
    new CleanPlugin([common.paths.build], { verbose: false }),
    new HtmlWebpackPlugin(common.plugins.html),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[chunkhash].js',
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
};
