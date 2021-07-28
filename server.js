// Setup of the app
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

// register routes
require('./routes')(app);

mongoose.connect(config.database_url, {useNewUrlParser: true, useUnifiedTopology: true } );

app.listen(config.port);
console.log("App listening on port " + config.port);
