var mysql = require('mysql');

var connection = mysql.createConnection({
	user : 'root',
	password : 'bdg051205anata',
	database : 'MTPlease'
});

connection.connect(function(err) {
	if(err) {
		console.error('mysql connection error');
		console.log(err);
		throw err;
	}
});
connection.query('use MTPlease');
