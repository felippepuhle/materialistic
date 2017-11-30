/* eslint-disable */
const dotEnv = require('dotenv-safe');
const path = require('path');

const paths = {
  root: path.join(__dirname),
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

dotEnv.load();

const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

module.exports = {
  paths,

  entry: path.join(paths.src, 'index'),

  output: {
    path: paths.build,
    filename: '[chunkhash].js',
    publicPath: PUBLIC_PATH,
  },

  loaders: {
    babel: {
      test: /\.js?$/,
      use: 'babel-loader',
      include: [paths.src],
    },
    assets: {
      test: /\.(ttf|otf|png|jpg)$/,
      use: ['url-loader'],
    },
  },

  plugins: {
    dotEnv: {
      path: './.env',
      safe: true,
    },
    html: {
      template: './src/html/index.html',
    },
  },
};
