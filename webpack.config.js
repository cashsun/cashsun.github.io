const path = require('path');
const webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        index: path.join(__dirname, 'js/main.js'),
        projects: path.join(__dirname, 'js/projects-main.js')
    },
    output: {
        filename: '[name].build.js',
        publicPath: '/',
        path: path.join(__dirname, 'js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader']
            },
            {
                test: /\.less$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};