var db = require("../models");

module.exports = function(app) {
	app.get("/api/maincategories", function(req, res){
		db.maincategories.findAll({}).then(function(dbmaincategories){
			res.json(dbmaincategories);
		});
	});

	app.get("/api/maincategories/:id", function(req, res){
		db.maincategories.findOne({
			where: {
				id: req.params.maincategories_id
			}
		}).then(function(dbmaincategories){
			console.log(dbmaincategories);
			res.json(dbmaincategories);
		});
	});
};
