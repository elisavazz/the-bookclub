const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');

router.post('/write', (req, res) => {
	const { title, book, commentAuthor, comment, date } = req.body;
	console.log(title + ', the day today is' + date);
	if (!comment) res.status(400).send({ error: 'Missing content!' });

	// Book.findOne({ isbn })
	// 	.then((book) => {
	// 		if (book) return res.status(400).send({ error: 'book has been uploaded already.' + book });

	// 		return req.files && req.files.picture ? upload(req.files.picture) : Promise.resolve();
	// 	})
	// 	.then((pictureUrl) => {
	return new Comment({
		title,
		book,
		commentAuthor,
		comment,
		date
	})
		.save()
		.then((book) => {
			res.send(comment);
		});
	// })
});
//THIS IS STILL EXACTLY THE USER MODEL: CHANGE IT!
router.get('/all', (req, res) => {
	Comment.find().then((comment) => {
		res.send(comment);
	});
});

module.exports = router;
