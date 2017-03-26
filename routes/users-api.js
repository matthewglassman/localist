var db = require("../models");

module.exports = function(app) {
	app.get("/login", function(req, res){
		var query = {};
		if(req.query.user_name){
			query.user_name = req.query.user_name;
		}
		db.users.findOne({
			where: query
		}).then(function(dbusers) {
			res.render("../views/profile", {dbusers});
			// res.json(dbusers)
		})
	});


	// haven't looked at this code yet
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