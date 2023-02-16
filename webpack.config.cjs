const path = require('path');

let webpackConfig = {
  entry: path.resolve(__dirname, './src/index.ts'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: "module",
    },
  },

};

module.exports = webpackConfig;
