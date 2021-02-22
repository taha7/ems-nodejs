const path = require('path');

module.exports = {
  watch: true,
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, '../../../public'),
    filename: 'js/app.js',
    publicPath: '../../../public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
