var express = require('express');
var app =  express();
var port = 3000;


// app.use(function (req, res, next) {
// 	res.send('this is the start of the chain')
//     next();
// })

app.use('/special', function(req, res) {
	res.send('you reached the special place')
	console.log(res.statusCode);
	console.log('you are getting special tweets?!?');
})

app.get('/news', function(req, res) {
	res.send('this is the NEWS get response')
	console.log('tweet tweet');
})


app.listen(port, function() {
	console.log('server listening........');
})