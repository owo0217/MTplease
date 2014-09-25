var express = require('express');

module.exports = function(app) {

	// main page 
	app.get('/', function(req, res) {
		res.render('main', { title : 'MTPlease!' });
	});

<<<<<<< HEAD

	// ***  member management part ***//
	
	// 로그인 페이지
=======
	// member management part
>>>>>>> c482b8f2848640d9826d28518766bb8f8b001275
	app.get('/members/login', function(req, res) {
		
	});

	// 회원 가입 페이지
	app.get('/members/join', function(req, res) {

	});

	// 회원 정보 수정 페이지
	app.get('/members/modify', function(req, res) {

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
	app.get('/pentions/general_search', function(req, res) {

	});
	// 검색 결과 보기(역경매 페이지 )
	app.get('/pentions/rev_auction_search', function(req, res) {

	});

	// 펜션 세부 정보 보기
	app.get('/pentions/:id', function(req, res) {

	});

	// ***  compare part ***//
	// 비교하기 보기
	app.get('/compare', function(req, res) {

	});

	// *** estimate part ***//
	//  견적내기 페이지
	app.get('/estimate', function(req, res) {

	});


}	// end of module exports
