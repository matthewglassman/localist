// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/assets', express.static('assets'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
	res.render('index');
})

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});