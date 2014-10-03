var database_members = require('../database/database_members.js');

console.log('service_members  에 들어옴');

module.exports = {

	join:  function(req,res){
		console.log('service_members -join 에 들어옴');
		database_members.add(req.body, function(result){
			req.session.user_id = req.body.members_ID;

			console.log('req.body.members_ID: ', req.body.members_ID);

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
		console.log('service_members -login 에 들어옴');
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
						, members_ID: req.session.user_id
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
		condition.members_nickname = req.body.members_nickname;
		condition.members_sex = req.body.members_sex;
		condition.members_school = req.body.members_school;
		condition.members_major = req.body.members_major;
		condition.members_group = req.body.members_group;
		condition.members_mobile = req.body.members_mobile;
		condition.members_startYear = req.body.members_startYear;
		condition.members_emailAD = req.body.members_emailAD;
		condition.members_mobileAD = req.body.members_mobileAD;
		condition.members_point = req.body.members_point;

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
		console.log('안녕 난 로그아웃이라해');
		req.session.user_id = null;

		console.log('logout - req.session.user_id : ', req.session.user_id);

		res.json({result: true, message: "정상적으로 로그아웃 처리 되었습니다."});
	}	// end of logout

	, get_members: function(req, res){
		console.log("안녕 난 get_members야 service_members에 있지 ");
		var condition = {};
		condition.members_ID = req.session.user_id;

		if(req.session.user_id != null){
			database_members.get(condition, function(result){
				if(result){
					console.log('service_members: get_members success');
					res.json({result: result, message: "회원 정보를 반환합니다."});
				} else {
					console.log('service_members: get_members fail');
					res.json({result: false, message: "회원 정보가 없습니다."});
				}
			});	// end of database_members. get_members;
		} else {
			res.json({message: "회원 정보가 없습니다."})
		}
	}

}	// end of module exports