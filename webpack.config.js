const webpack = require('webpack');
const path = require('path');


const BUILD_DIR = path.resolve(__dirname, 'lib');
const SOURCE_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: SOURCE_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: "umd"
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : SOURCE_DIR,
        loader : 'babel'
      }
    ]
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
};

module.exports = config;