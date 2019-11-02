// Setup of the app
var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');

// register routes
require('./routes')(app);

mongoose.connect(config.database_url, {useNewUrlParser: true, useUnifiedTopology: true } );

app.listen(config.port);
console.log("App listening on port " + config.port);
