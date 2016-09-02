
/* The entry section tells webpack where the entry file is, and we have the development server
for webpack and react-hot-loader. The output section is where the bundled files should go when we
build our app. In this case, the files will be in /build/bundle.js.

The module section is the most crucial part of webpack. This is where you add/remove loaders based
on what you need webpack to bundle for you. The two main ones we are using are react-hot and babel.
The line including react-hot and babel are for our development server to use es6 Javascript while
hot loading. The babel-loader for when we build and generate static files that are to be es6-ified.
Lastly, we generate our style.css as an example of how to include other types of static files.
This is where you would put different loaders such as a sass-loader or one for image assets.

The last section is plugins and include different type of webpack plugins. The NoErrorsPlugin is
for hot loader to not automatically reload if there are errors in the code (this is useful for
keeping state). There are many different webpack plugins that can aid your development. */

const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    'whatwg-fetch',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js[x?]?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js[x?]$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
