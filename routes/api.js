var member_service = require('../modules/service/member_service.js');

module.exports = function(app) {
	app.post('/member/join', function(req, res){
		member_service.join(req, res);
	});
	
	
		// 로그인
	app.post('/member/login', function(req, res) {
		member_service.login(req, res);
	});	
		
		// 로그아웃
	app.post('/member/logout', function(req, res) {
		member_service.logout(req, res);
	});
	
		// 회원 정보 수정
	app.post('/member/modify', function(req, res){
		member_service.modify(req, res);
	});

		//  비교하기 수정 
	app.post('/members/compare/modify', function(req, res) {
		compare.update(req,res);
	});

		// 견적내기 수정
	app.post('/members/estimate/modify', function(req, res) {
		estimate.update(req,res);
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