var member_db = require('../database/member_db.js');

module.exports = {

	// 회원 등록
	join : function(req, res){
		member_db.add(req.body, function(result){
			req.session.userid = req.body.id;

			if(result === true){
				console.log('member_service.js, join_success');
				res.json({result:true});
			}
			else {
				console.log('member_service.js, join_fail');
				res.json({result:false});
			}
		}); 	// end of add
	}		// end of join
	
	
	// 로그인
	,login: function(req, res){
		member_db.get({id: req.body.id}, function(member){
		
			if(member[0]){
				if(req.body.pw === member[0].password){
					req.session.userid = member[0].id;
					
					res.json({result: true, 
					          user: member,
							  user_id: req.session.userid,
							  message: "로그인 정보를 반환합니다."});					
				}
				else {
					res.json({result: false, message: "패스워드가 일치하지 않습니다."});
				}
			}
			else {
				res.json({result: false, message: "존재하지 않는 회원입니다."});
			}
		}); 	// end of get
	}	// end of login

	// 회원 수정
	, modify : function(req, res){
		var condition = {};
		condition.id = req.session.userid;
		condition.pw = req.body.pw;
		member_db.modify(condition, function(result){

			if(result === true){
				console.log('member_service.js, modify_success');
				res.json({result:true});
			}
			else {
				console.log('member_service.js, modify_fail');
				res.json({result:false});
			}
		}); 	// end of modify w condition
	}		// end of modify


	
	// 로그아웃
	,logout: function(req, res){
		req.session.userid = null;
		res.json({result:true, message: "정상적으로 로그아웃 되었습니다."});	
	}	// end of logout
	
	
} 	// end of module exports
