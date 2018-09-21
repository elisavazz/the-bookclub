const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const User = require('../../models/User');

const config = require('../../config');
const upload = require('../../utils/upload');

router.post('/add', (req, res) => {
	const { title, author, genre, language, estimatedReadingDays, availability, isbn } = req.body;
	console.log('CREATING NEW BOOK' + req.body);
	if (!title || !author || !language || !estimatedReadingDays)
		res.status(400).send({ error: 'Missing information' });

	new Book({
		title,
		author,
		genre,
		language,
		//bookCover: pictureUrl,
		estimatedReadingDays,
		availability,
		isbn
	})
		.save()
		.then((book) => {
			console.log(book);
			res.send(book);
		});

	// Book.find()
	// 	.then((book) => {
	// 		console.log('HELLO FROM BACKEND!:' + book);
	// 		return req.files && req.files.bookCover ? upload(req.files.bookCover) : Promise.resolve();
	// 	})
	// 	.then((pictureUrl) => {
	// 		return new Book({
	// 			title,
	// 			author,
	// 			genre,
	// 			language,
	// 			bookCover: pictureUrl,
	// 			estimatedReadingDays,
	// 			availability,
	// 			isbn
	// 		}).save();
	// 	})
	// 	.then((book) => {
	// 		res.send(book);
	// 	});
});
//should filter?
router.get('/all', (req, res) => {
	Book.find().then((books) => {
		res.send(books);
	});
});

router.get('/language/:value', (req, res) => {
	const { value } = req.params;
	console.log(value);
	Book.find({ language: value }).then((books) => {
		res.send(books);
	});
});

router.post('/add-to-bookshelf', (req, res) => {
	User.findByIdAndUpdate(
		req.user._id,
		{ $push: { bookshelf: req.body.id } },
		{ new: true }
	).then((user) => {
		res.send(user);
	});
});

//does the borrow function go

module.exports = router;
