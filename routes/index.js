var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  //res.sendFile('/public/stylesheets/style.css');
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;