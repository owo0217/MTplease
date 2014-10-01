var database_pensions = require('../database/database_pensions.js');

module.exports = {
	
	search : function(req, res) {
		console.log('service_member - search called');

		database_pensions.search(req.query, function(result) {
			if(result != null) {
				console.log('search success');
				res.render('pensions/pensions_search_list_test', { results : 'true' } );
			}
			else {
				console.log('search fail');
			}
		}
	},



	compare_create : function(req, res) {

	},

	compare_modify : function(req, res) {

	},



	estimate_create : function(req, res) {

	},

	estimate_modify : function(req, res) {

	},

};