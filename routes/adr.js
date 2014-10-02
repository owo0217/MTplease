var express = require('express');
var service_pensions = require('../modules/service/service_pensions.js');

module.exports = function(app) {

	// main page 
	app.get('/', function(req, res) {
		res.render('main', { title : 'MTPlease!' });
	});

	// member management part
	app.get('/members/login', function(req, res) {
		if(!req.session.user_id){
			res.render('members/members_login', { title: 'members-login', members_ID: req.session.user_id});
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
		res.render('members/members_modify', {title: 'members-modify', members_ID: req.session.user_id});
	});

	// 마이 페이지
	app.get('/members/myPage', function(req, res) {
		res.render('members/members_myPage', { title : 'members-myPage', members_ID: req.session.user_id });
	});

	// 마이 페이지 내부 비교하기 리스트 페이지
	app.get('/members/myCompare', function(req, res) {
		res.render('members/members_myCompare', { title : 'members-myCompare' });
	});


	// 마이 페이지 내부 견적보기 리스트 페이지
	app.get('/members/myEstimate', function(req, res) {
		res.render('members/members_myEstimate', { title : 'members-myEstimate' });
	});

	// 마이 페이지 내부 히스토리 보기 리스트 페이지
	app.get('/members/myHistory', function(req, res) {
		res.render('members/members_myHistory', { title : 'members-myHistory' });
	});


	// ***   search part ***//
	//  검색결과 보기
	app.get('/pensions/pensions_search_test', function(req, res) {
		res.render('pensions/pensions_search_test', { title : 'MTPlease' });
	});

	app.get('/pensions/pensions_search', function(req, res) {
		service_pensions.search(req, res);
	});

	// 객실 세부 정보 보기
	app.get('/pensions/pensions_detail', function(req, res) {
		service_pensions.detail(req, res);
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
