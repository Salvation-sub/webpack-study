const path = require('path');

module.exports = {
    // 빌드 경로 및 파일이름 지정
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // css 모듈
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // 이미지 처리
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
};