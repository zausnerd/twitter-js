// router.get('/stylesheets/style.css', function (req, res, next) {
//   res.sendFile(__dirname + '/public/stylesheets/style.css');
// });

module.exports = function(io) {
    var express = require('express');
    var bodyParser = require('body-parser');
    var router = express.Router();
    router.use(bodyParser.urlencoded({ extended: false }));
    // var path = require('path');
    // could use one line instead: var router = require('express').Router();
    var tweetBank = require('./tweetBank');


    router.get('/', function(req, res) {
        var tweets = tweetBank.list();
        res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true });
    });

    router.post('/tweets', function(req, res) {
        var name = req.body.name;
        var text = req.body.text;
        var id = tweetBank.add(name, text);
        io.sockets.emit('new_tweet', {name:name, text:text, id: id});
        res.redirect('/');
    });

    router.get('/users/:name', function(req, res) {
        var name = req.params.name;
        var list = tweetBank.find({ name: name });
        res.render('index', { title: 'Twitter.js - Posts by ' + req.params.name, tweets: list, showForm: true, name: name });
    });


    router.get('/tweets/:id', function(req, res) {
        var id = +req.params.id;
        var tweetResult = tweetBank.find({ id: id });
        res.render('index', { title: 'Tweet: ' + req.params.id, tweets: tweetResult });
    });
    router.use(express.static('public'));
    return router;
}