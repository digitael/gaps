const express = require('express'),
  app = express(),
  router = express.Router(),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),

  config = require('./webpack.config.js'),
  compiler = webpack(config);

let operators = require('./mock/operators.json');

router.get('/operators', function(req,res){
  res.json(operators);
})
app
  .use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))
  .use('/', express.static('dist'))
  .use('/api', router)
  .listen(3000, function () {
    console.log('listening on port 3000:\n');
  });

// needs refactoring: https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832