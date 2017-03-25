var db = require("../models");

module.exports = function(app) {
	app.get("/api/users", function(req, res){
		db.users.findAll({}).then(function(dbusers){
			res.json(dbusers);
		});
	});
	app.post("/api/users", function(req, res){
		console.log(req.body);
		db.users.create(req.body).then(function(dbusers){
			res.json(dbusers);
		});
	});
	app.delete("/api/users/:id", function(req, res){
		db.users.destroy({
			where: {
				id: req.params.users_id
			}
		}).then(function(dbusers) {
			res.json(dbAuthor);
		});
	});
};