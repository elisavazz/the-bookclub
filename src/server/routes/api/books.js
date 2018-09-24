const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const User = require('../../models/User');

const config = require('../../config');
const upload = require('../../utils/upload');

const { userMiddleware, checkLoggedIn } = require('../../utils/middleware');

router.post('/add', checkLoggedIn, (req, res) => {
	const { title, author, genre, language, estimatedReadingDays, availability, isbn } = req.body;
	console.log('CREATING NEW BOOK' + req.body);
	console.log(req);
	if (!title || !author || !language || !estimatedReadingDays)
		res.status(400).send({ error: 'Missing information' });
	//UPLOAD PICTURE IS NOT WORKING PROPERLY
	//req.files && req.files.cover ? upload(req.files.cover) : Promise.resolve();

	new Book({
		title,
		author,
		genre,
		language,
		//i need to add a reference to the owner so i can look for them when i need a book
		//bookCover: req.files.cover,
		estimatedReadingDays,
		availability,
		isbn
	})
		.save()
		.then((book) => {
			console.log('book is ' + book._id + ', ' + book.title);
			//WHY IS THIS NOT WORKING???????
			//adds authomatically the book to the bookshelf

			// req.user._id,
			// { $push: { bookshelf: req.body.id } },
			// { new: true }
			User.findByIdAndUpdate(
				req.user._id,
				{ $push: { bookshelf: book._id } },
				{ new: true },
				console.log('hello')
			).then((book) => {
				res.send(book);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});
//should filter?

router.get('/all', (req, res) => {
	console.log(req.query);
	const regex = req.query.title ? new RegExp(`.*${req.query.title}.*`, 'i') : /.*/;

	Book.find().then((books) => {
		res.send(
			books
				.filter((el) => {
					if (!el.title.match(regex)) return false;
					//if (req.query.minHp && parseInt(req.query.minHp) > el.base.HP) return false;

					return true;
				})
				.map((el) => {
					return {
						title: el.title,
						author: el.author,
						genre: el.genre,
						language: el.language,
						//picture:
						estimatedReadingDays: el.estimatedReadingDays,
						availability: el.availability,
						isbn: el.isbn
					};
				})
		);
	});
});

///
//with params cant be dynamic, try with query instead
router.get('/language/:value', (req, res) => {
	const { value } = req.params;
	console.log(value);
	Book.find({ language: value }).then((books) => {
		res.send(books);
	});
});

router.get('/available', (req, res) => {
	const { value } = req.params;
	console.log(value);
	Book.find({ availability: true }).then((books) => {
		res.send(books);
	});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Book.findById(id).then((book) => {
		res.send(book);
	});
});

router.post('/:id/lend', (req, res) => {
	const { id } = req.params;

	Book.findByIdAndUpdate(id, { availability: false }, { new: true })
		.then((book) => {
			res.send(book);
		})
		.then((book) => {
			res.send(book);
		});
});

router.post('/:id/getBack', (req, res) => {
	const { id } = req.params;

	Book.findByIdAndUpdate(id, { availability: true }, { new: true })
		.then((book) => {
			res.send(book);
		})
		.then((book) => {
			res.send(book);
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
