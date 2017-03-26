var db = require("../models");

module.exports = function(app) {
	app.get("/api/subcategories", function(req, res){
		db.subcategories.findAll({}).then(function(dbsubcategories){
			res.json(dbsubcategories);
		});
	});
	app.get("/api/subcategories/:id", function(req, res){
		db.subcategories.findOne({
			where: {
				id: req.params.subcategories_id
			}
		}).then(function(dbsubcategories){
			console.log(dbsubcategories);
			res.json(dbsubcategories);
		});
	});
};