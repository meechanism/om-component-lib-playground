const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const buildIndexConfig = new HTMLWebpackPlugin({
  template: __dirname + "/src/assets/templates/index.html",
  filename: "index.html"
});

module.exports = {
  entry: ["./src/index", "./src/assets/stylesheets/base.scss"],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,

        // https://github.com/webpack-contrib/sass-loader/issues/69
        // include seems to breack all te things
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("[name].css"),

    buildIndexConfig
  ],
  resolve: {
    extensions: [".css", ".scss", ".js"],
    modules: [path.resolve(__dirname, "node_modules")]
  }
};
