var express = require('express');
var app = express();
var morgan = require('morgan');
//var router  = express.router(); 
var logger = morgan('combined');

app.use(logger);
app.use(function(req,res,next) {
	console.log("all router triggered");
	//console.log(res.status());
	next();
	console.log("Test");
});

app.use('/special',function(req,res,next) {
	console.log("super special, don't tell nobody");
	res.send('you reached a super special area ;)')
});

app.get('/',function(req,res,next) {
	console.log(req.method);
	res.send('get received and now responded');
});

app.post('/',function(req,res,next) {
	console.log(req.method);
	res.send('post received and now responded');
});



// app.get('/', function(req,res) {
// 	console.log('you smart, you real smart -dj Khaled');
// 	res.send('new response');
// });

// app.get('/news', function(req,res) {
// 	console.log('surprise! its the news');
// 	res.send('news');
// });


app.listen(3000);