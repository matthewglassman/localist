// Dependencies
// =============================================================
var path = require("path");
var model = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  // index route loads index
  app.get("/", function(req, res) {
    
    if (req.user) {
      return res.redirect("/profile");
    }
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
        res.render("seller", {dbposts});
      });
  });

  // buyer route loads buyer
  app.get("/buyer", function(req, res) {
    res.render("buyer");
  });

  // user profile route loads user profile ** maybe not be using this page **
  app.get("/profile", isAuthenticated, function(req, res) {
    res.render("profile")
  });
  
};
