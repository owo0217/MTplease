var express = require('express');

module.exports = function(app) {

	// main page 
	app.get('/', function(req, res) {
		res.render('main', { title : 'MTPlease!' });
	});

	// member management part
	app.get('/members/login', function(req, res) {

	});

	app.get('/members/join', function(req, res) {

	});

	app.get('/members/modify', function(req, res) {

	});

	app.get('/members/mypage', function(req, res) {
		res.render('members/mypage', { title : 'MTPlease!' });
	});

	app.get('/members/compare/lists', function(req, res) {

	});

	app.get('/members/compare/detail', function(req, res) {

	});

	app.get('/members/estimate/lists', function(req, res) {

	});

	app.get('/members/estimate/detail', function(req, res) {

	});

	app.get('/members/reserve/lists', function(req, res) {

	});

	app.get('/members/reserve/detail', function(req, res) {

	});

	app.get('/members/recent/lists', function(req, res) {

	});

	// search part
	app.get('/pentions/general_search', function(req, res) {

	});

	app.get('/pentions/rev_auction_search', function(req, res) {

	});

	app.get('/pentions/:id', function(req, res) {

	});

	// compare part
	app.get('/compare', function(req, res) {

	});

	// estimate part
	app.get('/estimate', function(req, res) {

	});


}