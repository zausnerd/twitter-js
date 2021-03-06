var express = require('express');
var router = express.Router();
// var path = require('path');
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/stylesheets/style.css', function (req, res, next) {
  res.sendFile(__dirname + '/../public/stylesheets/style.css');
});



router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

module.exports = router;