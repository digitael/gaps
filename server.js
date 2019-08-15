const express = require('express'),
  app = express(),
  router = require('./src/api'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),

  config = require('./webpack.config.js'),
  compiler = webpack(config);

  require('./src/database');
  require('./src/seed');

app
  .use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))
  .use('/', express.static('dist'))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api', router)
  .listen(3100, function () {
    console.log('listening on port 3100:\n');
  });

// needs refactoring: https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832