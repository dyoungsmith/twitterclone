var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');



module.exports = function (io) {

	io.sockets.emit('newTweet', {});

  router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  console.log(tweets);
	  res.render( 'index', { tweets: tweets, showForm: true } );
  });
  return router;
};

