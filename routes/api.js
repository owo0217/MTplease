var service_members = require('../modules/service/service_members.js');

module.exports = function(app) {

	app.post('/members/join', function(req, res){
		service_members.join(req, res);
	});
	
		// 로그인
	app.post('/members/login', function(req, res) {
		service_members.login(req, res);
	});	
		
		// 로그아웃
	app.post('/members/logout', function(req, res) {
		service_members.logout(req, res);
	});
	
		// 회원 정보 수정
	app.post('/members/modify', function(req, res){
		service_members.modify(req, res);
	});

		//  비교하기 수정 
	app.post('/members/compare/modify', function(req, res) {
		compare.modify(req,res);
	});

		// 견적내기 수정
	app.post('/members/estimate/modify', function(req, res) {
		estimate.modify(req,res);
	});

		//  비교하기 생성
	app.post('/compare/create', function(req, res) {
		compare.create(req,res);
	});

		// 견적내기 생성
	app.post('/estimate/create', function(req, res) {
		estimate.create(req,res);
	});
}	// end of module exports
