// a sample route which save and get the post

// get router and define routes and process there
var router = require('express').Router();
var Post = require('../models/post');

// @method GET
// @desc get all posts
router.get('/', async function (req, res) {
	let posts = await Post.find();
	res.json({
		success: true,
		posts: posts
	});
});

// @method GET
// @desc get post based on id
router.get('/:id', async function (req, res) {
	let post = await Post.findById(req.params.id);
	res.json({
		success: true,
		post: post
	});
});

// @method GET
// @desc save a new post
router.post('/save', function (req, res) {
	let{ title, description} = req.body;
	let newPost = new Post({
		title: title,
		description: description
	});
	newPost.save((err, result) => {
		if (err) {
			console.log(err);
			res.send(JSON.stringify({status: "error", value: "Error, db request failed"}));
			return
		}
		res.status(201).send(JSON.stringify({status: "ok", post: result}));
	});

});

// export defined routes
module.exports = router;
