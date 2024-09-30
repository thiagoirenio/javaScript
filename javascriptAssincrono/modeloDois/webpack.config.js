const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.html', // Ponto de entrada
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.html',
    },
    devServer: {
        static: './dist',
        open: true,
        hot: true,
    },
};
