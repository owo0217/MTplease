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
		console.log(err);                                                                                                                                           
		throw err;                                                                                                                                                  
	}                                                                                                                                                               
});

connection.query('use MTPlease');                                                                                                                                

// create members database
var query = 'CREATE TABLE IF NOT EXISTS members(mem_id VARCHAR(100) NOT NULL PRIMARY KEY, password VARCHAR(100) NOT NULL);'
connection.query(query, function(err, results) {
	if(err) {
		throw err;
	}
	else {
		console.log(results);                            
	}
});
