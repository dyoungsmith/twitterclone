var express = require('express');
var routes = require('./routes/index.js');
var swig = require('swig');

var app =  express();
var port = 3000;

app.use(express.static('public'));
app.use('/', routes);
app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); 
swig.setDefaults({ cache: false });


app.get('/', function(req, res, next) {
	res.send('under construction.');
	next();
});

app.get('/tweets/', function(req, res, next) {
	res.send('send us your tweets');
	next();
});

app.post('/tweets/', function (req, res, next) {
	// res.send('this is the start of the chain');
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
	next();
});


app.listen(port, function() {
	console.log('server listening........');
});

