// module exports
var mysql = require('mysql');

// create database connection
var connection = mysql.createConnection({                                                                                                                           
	user : 'root',                                                                                                                                                  
	password : 'bdg051205anata',
	database : 'MTPlease'
});                                                                                                                                                                 
                                                                                                                                                                    
connection.connect(function(err){                                                                                                                                   
	if(err){                                                                                                                                                        
		console.error('mysql connection error');                                                                                                                    
		//console.log(err);                                                                                                                                           
		throw err;                                                                                                                                                  
	}                                                                                                                                                               
});

connection.query('use MTPlease');                                                                                                                                

// create members database
var query = "CREATE TABLE IF NOT EXISTS members(members_ID VARCHAR(100) NOT NULL PRIMARY KEY, members_password VARCHAR(100) NOT NULL, members_nickname VARCHAR(100) NOT NULL, members_sex CHAR(1), members_school VARCHAR(100), members_major VARCHAR(100), members_group VARCHAR(100), members_mobile VARCHAR(13), members_startYear INT(2), members_emailAD BOOL, members_mobileAD BOOL, members_point INT);";


connection.query(query, function(err, results) {
	if(err) {
		throw err;
	}
	else {
		//console.log(results);                            
	}
});


module.exports = {

	add: function(members, callback){

		var data = [members.members_ID
				, members.members_password	
				, members.members_nickname
				, members.members_sex
				, members.members_school
				, members.members_major
				, members.members_group
				, members.members_mobile
				, members.members_startYear
				, members.members_emailAD
				, members.members_mobileAD
				, members.members_point
			];

		console.log('database_members - add : data =>', data);

		connection.query('INSERT INTO members(members_ID, members_password, members_nickname, members_sex, members_school, members_major, members_group, members_mobile, members_startYear, members_emailAD, members_mobileAD, members_point) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)', data
			, function(err){
				if(!err){
					console.log('database_members: add success');
					callback(true);
				} else {
					console.log('database_members: add fail');
					callback(false);
				}
		});	// end of connection.query
	}	// end of add

	, get: function(condition, callback){
		console.log('database_members -get : condition => ', condition);

		var query_select = "SELECT * FROM members WHERE members_ID ='"+condition.members_ID+"'";

		console.log(query_select);

		connection.query(query_select
			, function(err, result){
				if(result){
					console.log('database_members: get success');
					callback(result);
				} else {
					console.log('database_members: get fail');
					callback(result);
				}
		});	// end of connection.query

	}	// end of get

	, modify: function(condition, callback){
		console.log('database_members -modify : condition => ', condition);
		var query_select = "UPDATE members SET members_password='"+condition.members_password+"', members_nickname='"+condition.members_nickname+"', members_sex='"+condition.members_sex+"', members_school='"+condition.members_school+"', members_major='"+condition.members_major+"', members_group='"+condition.members_group+"', members_mobile='"+condition.members_mobile+"', members_startYear='"+condition.members_startYear+"', members_emailAD='"+condition.members_emailAD+"', members_mobileAD='"+condition.members_mobileAD+"', members_point='"+condition.members_point+"' WHERE members_ID='"+condition.members_ID+"'";

		console.log(query_select);

		connection.query(query_select
			, function(err){
				if(!err){
					console.log('database_members: modify success');
					callback(true);
				} else {
					console.log('database_members: modify fail');
					callback(false);
				}
			});	// end of connection.query

	}	// end of modify

// 회원 id 중복체크. 중복인 경우 false 를 리턴, 아닌 경우, true 리턴
	,check_id: function(check_id, callback){
		console.log('database_members - check_id : check_id => ', check_id);

		var query_count = "SELECT COUNT(members_ID) FROM members WHERE members_ID='"+condition.members_ID+"'";

		console.log(query_count);

		connection.query(query_count
			, function(err, result){
				if( 0 == result.count){
					callback(true);
				} else {
					callback(false);
				} 
			});	// end of connection query

	}	// end of check_id


}	// end of module exports
