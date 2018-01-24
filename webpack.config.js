const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const buildIndexConfig = new HTMLWebpackPlugin({
  template: __dirname + "/src/assets/templates/index.html",
  filename: "index.html"
});

module.exports = {
  entry: ["./src/index"],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: [path.resolve(__dirname, "node_modules")]
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
    buildIndexConfig
  ],
  resolve: {
    extensions: [".css", ".scss", ".js"],
    modules: [path.resolve(__dirname, "node_modules")]
  }
};
