const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            compress: true,
            port: 8080,
            open: true,
        }
    },
    entry: {
        index: "./src/scripts/source.js"
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }],
    },
    plugins: [new MiniCssExtractPlugin()]
}