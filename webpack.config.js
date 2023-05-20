const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      compress: true,
      port: 8080,
      open: true,
    }
  },
  entry: {
    index: "./src/scripts/source.js"
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'css' },
        { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'js' },
        { from: 'node_modules/bootstrap-icons/font/bootstrap-icons.min.css', to: 'css' },
        { from: 'node_modules/bootstrap-icons/font/fonts', to: 'fonts' },
        { from: 'sass/assets/money-management-favicon.png', to: 'assets' },
        { from: 'sass/assets/undraw_projections_re_ulc6.svg', to: 'assets' },
      ],
    })
  ]
};
