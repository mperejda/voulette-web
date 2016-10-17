// server.js

//
// SETUP ==================================================================================
var express = require('express');						// for processing image uploads
var app = express(); 							// define our app using express
var port = process.env.PORT || 8080;  			// set our port

// LOAD PAGE ==========================================================================
app.use(express.static('public'))

app.get('/', function(req, res) {
	res.render('../public/index')		// load a single file (angular will handle page changes on the fron end)
});

// START SERVER =======================================================================
app.listen(port, function() {
	console.log("Listening at localhost:" + port);
});

// test pipeline linkages
