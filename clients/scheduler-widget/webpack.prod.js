const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // new CompressionPlugin({
        //     filename: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.(js|css|html|svg)$/,
        //     threshold: 8192,
        //     minRatio: 0.8
        // })
    ]
});
