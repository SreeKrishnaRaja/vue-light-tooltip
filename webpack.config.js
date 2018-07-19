const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/tooltip.vue',
  output: {
      path: path.resolve('dist'),
      filename: 'tooltip.min.js',
      libraryTarget: 'umd'
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.common.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
};
