var mysql = require('mysql');

var connection = mysql.createConnection({
	user : 'root',
	password : 'blacky',
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

// create members database


// pensions database
var query = "CREATE TABLE IF NOT EXISTS pensions ( region enum('대성리','청평','가평') not null, pen_name CHAR(30) not null, pen_homepage CHAR(30), pen_lot_adr CHAR(60), pen_road_adr CHAR(60), pen_ceo CHAR(20) not null, pen_checkin TIME not null, pen_checkout TIME not null, PRIMARY KEY(region, pen_name) );";
connection.query(query, function(err, results) {
	if(err) {
		throw err;
	}
	else { 
		//console.log(results);
	}
});

query = "CREATE TABLE IF NOT EXISTS rooms ( region enum('대성리', '청평', '가평') not null, pen_name CHAR(30) not null, room_name CHAR(30) not null, std_people INT not null, max_people INT not null, PRIMARY KEY(pen_name, room_name), FOREIGN KEY (region, pen_name) REFERENCES pensions(region, pen_name) ON DELETE CASCADE ON UPDATE CASCADE );";


