var express = require('express');
var router = express.Router();
// var path = require('path');
// could use one line instead: var router = require('express').Router();
var tweetBank = require('./tweetBank');


router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});
 
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+req.params.name, tweets: list } );
});


router.get('/tweets/:id', function(req, res) {
  var id = +req.params.id;
  var tweetResult = tweetBank.find( {id: id} );
  res.render( 'index', { title: 'Tweet: '+req.params.id, tweets: tweetResult } );
});







router.use(express.static('public'));


// router.get('/stylesheets/style.css', function (req, res, next) {
//   res.sendFile(__dirname + '/public/stylesheets/style.css');
// });

module.exports = router;