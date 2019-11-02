// a centralized file for registering all routes
// create separate files for different routes to make them manageable

// import routes
var postRoutes = require('./post');

// register routes in the application
module.exports = function (app) {
	app.use('/api/posts', postRoutes);
};