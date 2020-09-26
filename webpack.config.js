const path = require('path')
const webpack = require('webpack');

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: "development",
    entry: {
        myfile: "./src/engine.js"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "js/main.js",
        publicPath: "/assets/"
    },
    devServer: {
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}