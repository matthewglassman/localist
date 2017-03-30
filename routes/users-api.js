var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
	// app.get("/login", function(req, res){
	// 	var query = {};
	// 	if(req.query.user_name){
	// 		query.user_name = req.query.user_name;
	// 	}
	// 	db.users.findOne({
	// 		where: query
	// 	}).then(function(dbusers) {
	// 		res.render("../views/profile", {dbusers});
	// 		// res.json(dbusers)
	// 	})
	// });

	// haven't looked at this code yet
	app.get("/api/users", function(req, res){
		db.users.findAll({} ).then(function(dbusers){
			res.json(dbusers);
		});
	});

	// log in
	app.post("/api/login", passport.authenticate("local"), function(req, res) {
		res.json("");
	});

	// sign up
	app.post("/api/users", function(req, res){
		// console.log("from inside users-api "+req.body.user_name);
		//db.users.create(req.body).then(function(dbusers){
		//Writing in actual items to grab from user form to create a new user.  Need to get IDs of form fields.
		db.users.create({
			user_name: req.body.user_name,
			user_email: req.body.user_email,
			user_password: req.body.user_password,
			user_zip: req.body.user_zip
		}).then(function() {
	      res.redirect(307, "/api/login");
	    }).catch(function(err) {
	      res.json(err);
	    });
	});

	app.get("/logout", function(req, res) {
	    req.logout();
	    res.redirect("/");
	});

	app.delete("/api/users/:id", function(req, res){
		db.users.destroy({
			where: {
				id: req.params.users_id
			}
		}).then(function(dbusers) {
			res.json(dbusers);
		});
	});
};