var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
  url: 'http://127.0.0.1:4000'
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  client.get('/users', function (err, request, response, obj) {
    assert.ifError(err);

    res.end(JSON.stringify(obj, null, 2));
  });

});

module.exports = router;
