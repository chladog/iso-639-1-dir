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
};

module.exports = [{
  ...webpackConfig, ...{
    output: {
      filename: "index.mjs",
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      library: {
        type: "module",
      },
    },
  }
}, {
  ...webpackConfig, ... {
    output: {
      filename: "index.cjs",
      path: path.resolve(__dirname, 'dist'),
      library: {
        type: "commonjs",
      },
    },
  }
}];
