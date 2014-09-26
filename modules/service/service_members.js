var database_members = require('../database/database_members.js');

module.exports = {

	join:  function(req,res){
		database_members.add(req.body, function(result){
			req.session.user_id = req.body.members_ID;

			if(result == true){
				console.log('service_members: join success');
				res.json({result:true});
			} else {
				console.log('service_members: join fail');
				res.json({result:false});
			}
		}); 	// end of database_members.add
	}	// end of join

	, login: function(req, res){
		database_members.get({members_ID: req.body.members_ID}, function(members){
			if(members[0]){
				if(req.body.members_password == members[0].members_password){
					req.session.user_id = members[0].members_ID;
					res.json({result: true
						, members:members[0]
						, members_ID: req.session.user_id
						, message: "로그인 정보를 반환합니다."});
				} else {
					res.json({result: false
						, members: members[0]
						, user_id: req.session.user_id
						, message: "비밀번호가 일치하지 않습니다."});
				}
			} else {
				res.json({result: false, message: "존재하지 않는 회원입니다."});
			}
		
		});	// end of database_members.get
	}	// end  of login

	,  modify: function(req, res){
		var condition = {};
		condition.members_ID = req.session.user_id;
		condition.members_password = req.body.members_password;
		database_members.modify(condition, function(result){
			if(result === true){
				console.log('service_members: modify success');
				res.json({result: true});
			} else {
				console.log('service_members: modify fail');
				res.json({result: false});
			}
		});	// end of database_members.modify
	}	// end of modify

	, logout: function(req, res){
		req.session.user_id = null;
		res.json({result: true, message: "정상적으로 로그아웃 처리 되었습니다."});
	}	// end of logout

}	// end of module exports