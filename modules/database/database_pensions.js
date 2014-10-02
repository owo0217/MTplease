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

module.exports = {
	search : function(condition, callback) {
		var search_query = "SELECT * FROM (SELECT * FROM pensions_peak_periods NATURAL JOIN rooms_costs WHERE period_start <= '" + condition.date + "' AND period_end >= '" + condition.date + "') A NATURAL JOIN (SELECT * FROM rooms NATURAL JOIN pensions WHERE pen_region ='" + condition.region + "' AND std_num_people <=" + condition.people + " AND max_num_people >=" + condition.people + ") B";
		console.log(search_query);
		connection.query(search_query, function(err, results) {
			if(!err) {
				console.log(results);
				callback(results);
			}
			else {
				console.log('db query err');
				callback(null);
			}
		});
	},

	detail : function(condition, callback) {
		var detail_query = "SELECT * FROM (SELECT * FROM pensions_peak_periods NATURAL JOIN rooms_costs WHERE period_start <= '" + condition.date + "' AND period_end >= '" + condition.date + "') A NATURAL JOIN (SELECT * FROM rooms NATURAL JOIN pensions WHERE pen_region ='" + condition.region + "' AND std_num_people <=" + condition.people + " AND max_num_people >=" + condition.people + ") B";
		console.log(detail_query);
		connection.query(detail_query, function(err, results) {
			if(!err) {
				console.log(results);
				callback(results);
			}
			else {
				console.log('db query err');
				callback(null);
			}
		});
	}
}

/*"SELECT *
FROM (SELECT *
FROM pensions_peak_periods NATURAL JOIN rooms_costs
WHERE period_start <= '" + condition.date + "' AND period_end >= '" + condition.date + "') A
NATURAL JOIN
(SELECT *
FROM rooms NATURAL JOIN pensions
WHERE pen_region ='" + condition.region + "
AND std_num_people <=" + condition.people + "
AND max_num_people >=" + condition.people + ") B"*/