const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.ts'    
  }, 
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [{loader:'file-loader', options:{
            name: '[name].[ext]'
        }}]
       ,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};