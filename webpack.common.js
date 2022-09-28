const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src/scripts/index.js"),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                dependency: {not: ["url"]},
                type: "asset/resource",
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
                type: "javascript/auto",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "src/templates/index.html"),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/public/"),
                    to: path.resolve(__dirname, "dist/public/"),
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, "src/public/images/logo.png"),
        }),
        new CleanWebpackPlugin(),
    ],
};
