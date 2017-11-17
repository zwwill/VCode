

const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname,'index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'vc.min.js',
        library: '$VC',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}