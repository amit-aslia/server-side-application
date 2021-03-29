const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we are bundling a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack our root file of our server application
  entry: './src/index.js',

  // tell webpack where to put output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);