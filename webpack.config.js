const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/index.js',
        // hot module replacement를 위한 런타임 코드
        hot: 'webpack/hot/dev-server.js',
        // 웹 소켓 전송, hot 및 live 리로드 로직을 위한 개발 서버 클라이언트
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        // 웹 소켓 전송, hot 및 live 리로드 로직을 위한 개발 서버 클라이언트
        hot: false,
        client: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
        }),
        // hot module replacement를 위한 플러그인
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};