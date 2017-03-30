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
    res.render("seller", { id: req.session.userId})
  });

  // buyer route loads buyer
  app.get("/buyer", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/search.html"));
    // res.render("buyer");
  });

  // user profile route loads user profile ** maybe not be using this page **
  // app.get("/profile", isAuthenticated, function(req, res) {
  //   res.render("profile")
  // });

  app.get("/profile", isAuthenticated, function(req, res) {
    res.render("profile", { username: req.session.username })
  });
};
