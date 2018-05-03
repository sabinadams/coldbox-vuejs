var path = require('path')
var webpack = require('webpack')

module.exports = {
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            }
        ]
    },
    plugins: [
        // this block
        new webpack.LoaderOptionsPlugin({
            vue: {
                loaders: {
                    scss: 'style-loader!css-loader!sass-loader'
                }
            }
        })
    ]
}