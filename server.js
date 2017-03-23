// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3030;
app.listen(port);

var stylesheet = {stylesheet}

app.get('/', function(req,res){
	res.render('index');
})