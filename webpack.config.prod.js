const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "js/vendor", to: "js/vendor" },
        { from: "icon.svg", to: "icon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "404.html", to: "404.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
      ],
    }),
  ],
});
