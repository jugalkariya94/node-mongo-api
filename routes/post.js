// get router and define routes and process there
var router = require('express').Router();

// @method GET
// a simple get route
router.get('/', function (req, res) {
	res.json({
		success: true,
		message: 'get requested for post'
	});
});

// export defined routes
module.exports = router;
