const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css', 'sass'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
  },
};