const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const buildIndexConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/assets/templates/index.html',
  filename: 'index.html'
});


module.exports = {
  entry: [
    './src/index',
    './src/assets/stylesheets/base.scss'
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader?sourceMap',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader?sourceMap',
          use: [
            {
              loader: 'css-loader?sourceMap'
            },
            {
              loader: 'sass-loader?sourceMap',
            }
          ],
        })
      },
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
    buildIndexConfig
  ]
};
