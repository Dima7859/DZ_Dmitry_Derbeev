const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
            filename: 'Alliance.html',
            template: './src/html/Alliance.html'
        }),
        new HTMLWebpackPlugin ({
            filename: 'Horde.html',
            template: './src/html/Horde.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(jpg|png|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        port: 4200
    }
}