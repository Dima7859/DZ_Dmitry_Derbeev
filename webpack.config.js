const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { prototype } = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'budle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin ({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTMLWebpackPlugin ({
            filename: 'sing-in.html',
            template: './src/templates/sing-in.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        port: 4200
    }
}