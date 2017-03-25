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
    res.render("../views/seller");
  });

  // buyer route loads buyer
  app.get("/buyer", function(req, res) {
    res.render("../views/buyer");
  });

};
