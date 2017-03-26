// Dependencies
// =============================================================
var path = require("path");
var model = require("../models");

module.exports = function(app) {

  // index route loads index
  app.get("/", function(req, res) {
    res.render("index");
  });

  // seller route loads seller
  app.get("/seller", function(req, res) {
    var query = {};
    if (req.query.user_name) {
      query.user_name = req.query.user_name;
    }

    model.posts.findAll({
      where: query,
      include: [model.users]
    })
      .then(function(dbposts){
        res.render("../views/seller", {dbposts});
      });
  });

  // buyer route loads buyer
  app.get("/buyer", function(req, res) {
    res.render("../views/buyer");
  });

  app.get("/profile", function(req, res) {
    res.render("../views/profile");
  });

};
