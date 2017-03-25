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
var PORT = process.env.PORT || 3030;
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/assets', express.static('assets'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/html-routes.js')(app);

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

// app.listen(port, function() {
//   console.log("App listening on PORT " + port);

//Syncing models here
db.sequelize.sync({force:true}).then(function(){ // take force:true out to prevent it from deleting each time
	app.listen(PORT, function(){
		console.log("App listening on PORT " + PORT);
	});
});