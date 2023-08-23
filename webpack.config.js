const webpack = require("webpack");
const path = require("path");


const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    sw: "./src/sw.js",
    main: "./src/main.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "./assets/[name][ext]",
    clean: true,
  },

  devServer: {
    static: "./dist",
    client: {
      progress: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Simon Says Replay",
      template: "./src/template.ejs",
      favicon: "./src/assets/favicon/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/manifest.json", to: "" },
        { from: "./src/assets/favicon", to: "favicon/" },
      ],
    }),
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
        type: "asset/resource",
      },
    ],
  },
};
