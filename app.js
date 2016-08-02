var express = require('express');
var routes = require('./routes/index.js');
var tweetBank = require('./tweetBank.js');
var swig = require('swig');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

// var server = app.listen(3000);
// var io = socketio.listen(server);

var app =  express();
var port = 3000;

app.use(express.static('public'));
app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); 
swig.setDefaults({ cache: false });


routes.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, showForm: true, searchedName:true} );
});

app.post('/tweets', function (req, res) {
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect( '/' );
});

app.listen(port, function() {
	console.log('server listening........');
});

