var db = require("../models");

module.exports = function(app){
	app.post("/add", function(req, res) {
		db.posts.create({
			post_title: req.body.post_title,
			post_body: req.body.post_body
		}).then(function(){
			res.redirect("/seller");
		});
	});

	// haven't looked at this code yet
	app.get("/api/posts", function(req, res){
		var query = {};
		if(req.query.users.id){
			query.usersid = req.query.users.id;
		}
		db.posts.findAll({
			where: query
		}).then(function(dbposts){
			res.json(dbposts);
		});
	});

	app.get("/api/posts/:id", function(req, res){
		db.posts.findOne({
			where: {
				id: req.params.posts_id
			}
		}).then(function(dbposts){
			console.log(dbposts);
			res.json(dbposts);
		});
	});

	app.post("/api/posts", function(req, res) {
		db.posts.create(req.body).then(function(dbposts){
			res.json(dbposts);
		});
	});

	app.delete("/api/posts/:id", function(req, res){
		db.posts.destroy({
			where: {
				id: req.params.posts_id
			}
		}).then(function(dbposts){
			res.json(dbposts);
		});
	});
	
	app.put("/api/posts", function(req, res){
		db.posts.update(
			req.body, 
			{
				where: {
					id: req.body.posts_id
				}
			}).then(function(dbposts){
				res.json(dbposts);
			});
		});
};