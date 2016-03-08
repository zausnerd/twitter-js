var express = require('express');
var swig = require('swig');
var app = express();
var morgan = require('morgan');
var routes = require('./index.js');

//socket IO
var socketio = require('socket.io');
// ...
var server = app.listen(3000);
var io = socketio.listen(server);
//end socket IO



//var router  = express.router(); 
var logger = morgan('combined');

app.engine('html', swig.renderFile);

// app.use(express.static('public'));

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ cache: false });

// swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
// 	console.log(output);
// });


app.use(logger);
app.use('/', routes(io));



// var people =[{name: 'Rick Ross'}, {name: 'Dj khaled'}, {name: 'future'}];



// var locals = {
// 	title: 'Example title',
// 	people:[
// 		{name: 'Jon'},
// 		{name: 'James'},
// 		{name: 'Joey'}
// 	]
// };

// app.use(function(req,res,next) {
// 	console.log("all router triggered");
// 	//console.log(res.status());
// 	next();
// 	console.log("Test");
// });


// app.get('/', function(req,res,next) {
// 	res.render('index', {title: 'historic rappers', people: people});
// });


// app.use('/special',function(req,res,next) {
// 	console.log("super special, don't tell nobody");
// 	res.send('you reached a super special area ;)')
// });

// app.get('/',function(req,res,next) {
// 	console.log(req.method);
// 	res.send('get received and now responded');
// });

// app.post('/',function(req,res,next) {
// 	console.log(req.method);
// 	res.send('post received and now responded');
// });


// app.use('/special',function(req,res,next) {
// 	console.log("super special, don't tell nobody");
// 	res.send('you reached a super special area ;)')
// });

// app.get('/',function(req,res,next) {
// 	console.log(req.method);
// 	res.send('get received and now responded');
// });

// app.post('/',function(req,res,next) {
// 	console.log(req.method);
// 	res.send('post received and now responded');
// });

// app.get('/', function(req,res) {
// 	console.log('you smart, you real smart -dj Khaled');
// 	res.send('new response');
// });

// app.get('/news', function(req,res) {
// 	console.log('surprise! its the news');
// 	res.send('news');
// });

