 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './index.js',
     output: {
       
         filename: 'main.bundle.js',
         libraryTarget: 'var',
         library: 'Falafel'
     },
     module: {
         /*loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ],*/
           rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loader: 'style-loader!css-loader!font-loader!autoprefixer-loader'

      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /vendor\/.+\.(jsx|js)$/,
  loader: 'imports?jQuery=jquery,$=jquery,this=>window'
}
    ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 }; 
