'use strict';

const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const rootDir = './dist/kuvira/';
const backend = process.env.BACKEND || 'localhost:9000';

function proxyOpts(prefix) {
  return {
    proxyReqPathResolver: function(req) {
      let ret = prefix + req.url;
      ret = ret.replace('/?', '?');
      ret = ret.replace(/\/$/, '');
      return ret;
    }
  }
}

app.set('port', process.env.PORT || 8000);
app.use('/api', proxy(backend, proxyOpts('/api')));
app.use('/', express.static(rootDir, {
  maxAge: '1d',
}));


app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
});
