const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');

const config = require('../../config');
const upload = require('../../utils/upload');

router.post('/add', (req, res) => {
	const { title, author, genre, language, extimatedReadingDays, availability, isbn } = req.body;
	console.log(
		'!AUTHOR IS ' +
			author +
			', TITLE IS ' +
			title +
			', language is ' +
			language +
			', length is ' +
			extimatedReadingDays
	);
	if (!title || !author || !language || !extimatedReadingDays)
		res.status(400).send({ error: 'Missing information.' });

	Book.findOne({ isbn })
		.then((book) => {
			if (book) return res.status(400).send({ error: 'book has been uploaded already.' + book });

			return req.files && req.files.picture ? upload(req.files.picture) : Promise.resolve();
		})
		.then((pictureUrl) => {
			return new Book({
				title,
				author,
				genre,
				language,
				bookCover: pictureUrl,
				extimatedReadingDays,
				availability,
				isbn
			}).save();
		})
		.then((book) => {
			res.send('holla book!');
		});
});
//THIS IS STILL EXACTLY THE USER MODEL: CHANGE IT!
router.get('/all', (req, res) => {
	Book.find().then((book) => {
		res.send(book);
	});
});

module.exports = router;
