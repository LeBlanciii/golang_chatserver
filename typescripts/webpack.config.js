var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './src/goChat.entrypoint.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'goChat.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    project: 'tsconfig.json',
                    config: 'tslint-with-typechecks.json',
                    type_check: true,
                    format: 'stylish'
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader?presets[]=es2015!ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.html']
    },
    devServer: {
        disableHostCheck: true,
        contentBase: './demo',
        overlay: true,
        port: 8000,
        inline: true
    },
    plugins: [new CopyWebpackPlugin([{from: './demo/assets'}])]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}