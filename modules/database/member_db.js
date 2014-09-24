// export module                                                                                                                                                    
var fs = require('fs')                                                                                                                                              
	, ejs = require('ejs')                                                                                                                                          
	, http = require('http')                                                                                                                                        
	, mysql = require('mysql')                                                                                                                                      
	, expxress = require('express');                                                                                                                                
	                                                                                                                                                                
// connect database                                                                                                                                                 
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

// TEST2 라는 데이터베이스에 접속합니다.                                                                                                                                                                 
connection.query('use MTPlease');                                                                                                                                

var query = "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = '" + "MTPlease" + "' AND table_name = '" + "members" + "'";



// development mode
/*if (app.get('env') === 'development') {

    if (connection.query('SHOW TABLES LIKE "members";')) {
    	connection.query('CREATE TABLE IF NOT EXISTS products(id VARCHAR(100) NOT NULL PRIMARY KEY, password VARCHAR(100) NOT NULL);'                                                     
	, function(err, rows, fields){
		if(err) throw err;                                                                                                                                        
			else{ console.log(rows);                                                                                                                                    
			}
	});
    }
       
}*/