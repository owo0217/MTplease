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

	app.post('/members/compare/update', function(req, res) {

	});

	app.post('/members/estimate/update', function(req, res) {

	});

	app.post('/compare/create', function(req, res) {

	});

	app.post('/estimate/create', function(req, res) {

	});
}