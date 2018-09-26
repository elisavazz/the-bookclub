const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');
const User = require('../../models/User');

const config = require('../../config');
const upload = require('../../utils/upload');

const { userMiddleware, checkLoggedIn } = require('../../utils/middleware');

router.post('/add', (req, res) => {
	const { title, author, genre, language, estimatedReadingDays, availability, isbn, date } = req.body;
	if (!title || !author || !language || !estimatedReadingDays)
		res.status(400).send({ error: 'Missing information' });

	const toLowerCaseTitle = title.toLowerCase();
	const toLowercaseLanguage = language.toLowerCase();
	Book.findOne({ title })
		.then((existingBook) => {
			if (existingBook) return res.status(400).send({ error: 'book exists already.' });
			return req.files && req.files.bookCover ? upload(req.files.bookCover) : Promise.resolve();
		})
		.then((pictureUrl) => {
			console.log('picture Url ', pictureUrl);
			new Book({
				owner: req.user._id,
				title,
				author,
				genre,
				language: toLowercaseLanguage,
				//i need to add a reference to the owner so i can look for them when i need a book
				bookCover: pictureUrl,
				estimatedReadingDays,
				availability,
				isbn,
				date
			})
				.save()
				.then((book) => {
					// console.log(
					// 	'this user added the book' + book.owner + 'and this is the id' + book._id
					// );
					//adds authomatically the book to users the bookshelf
					User.findByIdAndUpdate(
						book.owner,
						{
							$push: { bookshelf: book._id }
						},
						{ new: true }
					)
						.then((user) => {
							console.log('MY USER BOOKSHELF' + user);
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.then((book) => {
					console.log('MY book' + book);
					res.send(book);
				})
				.catch((err) => {
					console.log(err);
				});
		});
});
//should filter?
//MOVE TO THIS THIS ROUTE!!!!
//find a way to add email
router.get('/all', (req, res) => {
	let regexTitle = '';
	let regexLoc = '';
	let regexLang = '';
	if (req.query.title !== '')
		regexTitle = req.query.title ? new RegExp(`.*${req.query.title}.*`, 'i') : /.*/;
	else if (req.query.location !== '')
		regexLoc = req.query.location ? new RegExp(`.*${req.query.location}.*`, 'i') : /.*/;
	else if (req.query.language !== '')
		regexLang = req.query.language ? new RegExp(`.*${req.query.language}.*`, 'i') : /.*/;

	Book.find().populate('owner', 'location email').then((books) => {
		res.send(
			books
				.filter((el) => {
					console.log('regloc' + regexLoc);
					console.log('OWNER LOCATION' + el.owner.location);
					if (!el.title.match(regexTitle) && !el.author.match(regexTitle)) return false;
					//WHY CANT I SEND THE BOOK IF I CAN FIND IT?
					if (!el.language.match(regexLang)) return false;
					if (!el.owner.location.match(regexLoc)) return false;
					//if (el.language.match(regex)) console.log('SEARCH WITH REGEX' + el.title);
					//if (req.query.minHp && parseInt(req.query.minHp) > el.base.HP) return false;

					return true;
				})
				.map((el) => {
					return {
						owner: el.owner,
						title: el.title,
						author: el.author,
						genre: el.genre,
						language: el.language,
						bookCover: el.bookCover,
						estimatedReadingDays: el.estimatedReadingDays,
						availability: el.availability,
						isbn: el.isbn,
						date: el.date
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
	// Book.find().then((books) => {
	// 	books.forEach((element) => {
	// 		if (element.language.toLowercase() === value) res.send(element);
	// 	});
	// });
	Book.find({ language: value })
		.then((books) => {
			res.send(books);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/available', (req, res) => {
	console.log('QUERY' + req.query);
	const { value } = req.params;
	console.log(value);
	const regex = req.query.title ? new RegExp(`.*${req.query.title}.*`, 'i') : /.*/;
	Book.find({ availability: true })
		.populate('owner', 'location email')
		.then((books) => {
			res.send(books);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/allLanguages', (req, res) => {
	Book.find()
		.then((books) => {
			let languages = books.language;
			res.send(languages);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Book.findById(id).then((book) => {
		res.send(book);
	});
});

// router.post('/:id/contact', (req, res) => {
// 	const { id } = req.params;
// 	console.log(id);

// });

router.post('/:id/lend', (req, res) => {
	const { id } = req.params;

	Book.findByIdAndUpdate(id, { availability: false }, { new: true }).then((book) => {
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

router.get('/user-bookshelf', (req, res) => {
	console.log('HELLO User ' + req.user._id);
});

// Book.find({ owner: req.user._id })
// 	.populate('owner', 'email')
// 	.then((books) => {
// 		res.send(books);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
module.exports = router;
