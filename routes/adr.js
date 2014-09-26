var express = require('express');

module.exports = function(app) {

	// main page 
	app.get('/', function(req, res) {
		res.render('main', { title : 'MTPlease!' });
		console.log(req);
	});

	// member management part
	app.get('/members/login', function(req, res) {
		if(!req.session.user_id){
			res.render('members/members_login', {title: 'members-login'});
		} else {
			console.log(req.session.user_id);
			res.render('main', { title: 'MTPlease!', members_ID: req.session.user_id});
		}
	});

	// 회원 가입 페이지
	app.get('/members/join', function(req, res) {
		res.render('members/members_join', {title: 'members-join'});
	});

	// 회원 정보 수정 페이지
	app.get('/members/modify', function(req, res) {
		res.render('members/members_modify', {title: 'members-modify'});
	});


	// 마이 페이지
	app.get('/members/mypage', function(req, res) {
		res.render('members/mypage', { title : 'MTPlease!' });
	});

	// 마이 페이지 내부 비교하기 목록 페이지
	app.get('/members/compare/lists', function(req, res) {

	});

	// 마이 페이지 내부 비교하기  자세히 보기
	app.get('/members/compare/detail', function(req, res) {

	});

	// 마이 페이지 내부  견적 목록 페이지
	app.get('/members/estimate/lists', function(req, res) {

	});

	//  마이 페이지  내부 견적 자세히 보기
	app.get('/members/estimate/detail', function(req, res) {

	});

	// 마이 페이지 예약 목록 페이지
	app.get('/members/reserve/lists', function(req, res) {

	});

	// 마이 페이지 예약 자세히 보기
	app.get('/members/reserve/detail', function(req, res) {

	});

	// 최근 히스토리 목록 
	app.get('/members/recent/lists', function(req, res) {

	});

	// ***   search part ***//
	//  검색결과 보기
	app.get('/pensions/general_search', function(req, res) {

	});
	// 검색 결과 보기(역경매 페이지 )
	app.get('/pensions/rev_auction_search', function(req, res) {

	});

<<<<<<< HEAD
	// 객실 세부 정보 보기
	app.get('/pensions/:room_id', function(req, res) {
		console.log(res);
		res.render('compare', { title : 'MTPlease!' });
=======
	// 펜션 세부 정보 보기
	app.get('/pensions/:id', function(req, res) {

>>>>>>> 877bc53280a2d60822035e0774bc1c3ac83df779
	});

	// ***  compare part ***//
	// 비교하기 페이지 보기
	app.get('/compare', function(req, res) {
		res.render('compare', { title : 'MTPlease!' });
	});

	// *** estimate part ***//
	//  견적내기 페이지 보기
	app.get('/estimate', function(req, res) {
		res.render('estimate', { title : 'MTPlease!' });
	});


}	// end of module exports
