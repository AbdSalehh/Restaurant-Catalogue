const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 7024,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        compress: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
});
