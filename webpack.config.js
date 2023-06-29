const webpack = require('webpack');
const path = require('path')
require('dotenv').config({ path: './.env' });
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: './assets/[name][ext]',
        clean: true,
    },
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Simon Says Replay',
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(mp3|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },

};