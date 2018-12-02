const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const upload = require('../../utils/upload');

//var salt = bcrypt.genSaltSync(10);

router.post('/sign-up', (req, res) => {
	const { email, password, language, location } = req.body;

	if (!email || !password || !language) res.status(400).send({ error: 'Missing Credentials.' });

	//SEPARATE LANGUAGES
	let languageList = language.toLowerCase().replace(/ /g, '').split(',');
	console.log(languageList);

	User.findOne({ email })
		.then((existingUser) => {
			if (existingUser) return res.status(400).send({ error: 'E-Mail exists already.' });

			return req.files && req.files.picture ? upload(req.files.picture) : Promise.resolve();
		})
		.then((pictureUrl) => {
			const hashedPassword = bcrypt.hashSync(password, 10);
 console.log("hashed is "+hashedPassword);
			return new User({
				email,
				password: hashedPassword,
				profilePicture: pictureUrl,
				language,
				location
			}).save();
		})
		.then((user) => {
			const token = jwt.sign(
				{
					_id: user._id,
					email: user.email,
					username: user.username,
					profilePicture: user.profilePicture,
					language: user.language,
					location: user.location,
					bookshelf: user.bookshelf,
					wishlist: user.wishlist
				},
config.SECRET_JWT_PASSPHRASE
			);
			console.log("CURRENT TOKEN IS "+{token});
			res.send({ token }); //change to { token }

		});
});

router.post('/sign-in', (req, res) => {
	const { email, password } = req.body;
	console.log('req.body', { email, password });
	if (!email || !password) res.status(400).send({ error: 'Missing Credentials.' });

	User.findOne({ email: req.body.email }).populate('bookshelf').then((existingUser) => {
		console.log('USER IN WT', existingUser);
		if (!existingUser) return res.status(400).send({ error: 'User does not exist.' });

		const passwordsMatch = bcrypt.compareSync(password, existingUser.password);

		if (!passwordsMatch) return res.status(400).send({ error: 'Password is incorrect.' });

		const token = jwt.sign(
			{
				_id: existingUser._id,
				email: existingUser.email,
				username: existingUser.username,
				profilePicture: existingUser.profilePicture,
				language: existingUser.language,
				location: existingUser.location,
				bookshelf: existingUser.bookshelf,
				wishlist: existingUser.wishlist
			},
			config.SECRET_JWT_PASSPHRASE
		);
		res.send({ token })
		.catch((err) => {
			console.log(err);
		});;

	});
});

router.post('/edit', (req, res) => {
	const { username, language, location } = req.body;
	console.log(language);
	let languageList = language.toLowerCase().replace(/ /g, '').split(',');

	User.findByIdAndUpdate(
		req.user._id,
		{
			username: username,
			language: languageList,
			location: location
		},
		{ new: true }
	).then((user) => {
		const token = jwt.sign(
			{
				_id: user._id,
				email: user.email,
				username: user.username,
				profilePicture: user.profilePicture,
				language: user.language,
				location: user.location,
				bookshelf: user.bookshelf,
				wishlist: user.wishlist
			},
config.SECRET_JWT_PASSPHRASE
		);
		res.send({ token });
	});
});

module.exports = router;
