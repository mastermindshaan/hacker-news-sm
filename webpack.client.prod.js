const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.base');



const config = {
    mode: 'production',
    stats: {
        colors: false,
        hash: true,
        timings: true,
        assets: true,
        chunks: true,
        chunkModules: true,
        modules: true,
        children: true
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    // Tell webpack to root file of our server app
    entry: './src/client/client.js',

    // Tell webpack where to put output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },


    plugins: [
        new CompressionPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};

module.exports = merge(baseConfig, config);