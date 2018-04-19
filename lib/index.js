'use strict';

var _mysql = require('mysql');

var mysql = _interopRequireWildcard(_mysql);

var _cheerio = require('cheerio');

var cheerio = _interopRequireWildcard(_cheerio);

var _request = require('request');

var request = _interopRequireWildcard(_request);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var express = require('express');
var app = express();

var host = "localhost";
var port = '8686';

app.get('/', function (req, res, next) {});

app.listen(port, function () {
  return console.log('Your app is listening on ' + host + ': ' + port);
});