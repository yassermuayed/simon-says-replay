const webpack = require("webpack");
const path = require("path");
require("dotenv").config({ path: "./.env" });
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "main": "./src/main.js",
    "service-worker": "./src/service-worker.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./assets/[name][ext]",
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Simon Says Replay",
      template: "./src/template.ejs",
      favicon: "./src/assets/favicon/favicon.ico",
      meta: {

      }
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/manifest.json", to: "" },
        { from: "./src/assets/favicon", to: "favicon/" },
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|webp|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.webmanifest$/i,
        use: 'webpack-webmanifest-loader',
        type: 'asset/resource',
      },
    ],
  },
};
