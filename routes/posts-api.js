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
		// TODO make this work with search if needed
		if (req.query.user_id) {
			query.usersid = req.query.user_id;
		}
		if (req.query.search) {
			var searchTerms = req.query.search;
			var searchString = '%' + searchTerms + '%';
			// TODO split the search string into terms?
			query = {$or: [
				{
			      	post_title: { $like: searchString }
			    } , {
					post_body: { $like: searchString }
			    }]
			};
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
				post_id: req.params.id
			}
		}).then(function(dbposts){
			console.log(dbposts);
			res.json(dbposts);
		});
	});

	app.post("/api/posts", function(req, res) {
		//db.posts.create(req.body).then(function(dbposts){

		db.posts.create({
			post_title: req.body.title,
			post_body: req.body.body,
			// post_photo: req.body.post_photo,
			post_price: req.body.price,
			maincategoryMaincategoriesId: req.body.maincategory,
			userId: req.body.userId,
			subcategoryId: req.body.subcategory
		}).then(function(dbposts){
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