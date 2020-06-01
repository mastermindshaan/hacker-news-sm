const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.js');

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    mode: 'production',

    // Tell webpack the root file of our
    // server application
    entry: './src/index.js',
    // We don't serve bundle.js for server, so we can use dynamic external imports
    externals: [webpackNodeExternals()],

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public', 'images'),
                    to: path.resolve(__dirname, 'build', 'images')
                }
            ],
        }),
    ]
};

module.exports = merge(baseConfig, config);