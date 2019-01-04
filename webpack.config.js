var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    devtool: debug ? 'inline-sourcemap' : null,
    entry: './js/chart.js',
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['transform-class-properties', 'transform-decorators-legacy']
            }
        }]
    },
    output: {
        path: __dirname + '/src',
        filename: 'chart.min.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};