var database_pensions = require('../database/database_pensions.js');

module.exports = {
	
	search : function(req, res) {
		console.log('service_member - search called');

		database_pensions.search(req.query, function(results) {
			if(results != null) {
				console.log('search success');
				res.render('pensions/pensions_search', { result : results });
			}
			else {
				console.log('search fail');
			}
		});
	},

	detail : function(req, res) {
		console.log('service_member - detail called');

		database_pensions.detail(req.query, function(results) {
			if(results != null) {
				console.log('detail success');
				res.render('pensions/pensions_detail', { result : results });
			}
			else {
				console.log('detail fail');
			}
		});

	},



	compare_create : function(req, res) {

	},

	compare_modify : function(req, res) {

	},



	estimate_create : function(req, res) {

	},

	estimate_modify : function(req, res) {

	}

};