const express   = require('express'),
      app       = express(),
      webpack   = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),

      config = require('./webpack.config.js'),
      compiler = webpack(config);

app
  .use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))
  .use('*', function (req, res) {
    res.sendFile('dist/main.html', {"root": "."});
  })
  .listen(3000, function(){
    console.log('listening on port 3000:\n');
  });

// needs refactoring: https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832