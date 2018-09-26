const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const Book = require('../../models/Book');

const { userMiddleware, checkLoggedIn } = require('../../utils/middleware');

router.use(userMiddleware); //IS THE USER LOGGED IN?

//TO DO! find user, let him update his state, display their bookshelf , display their comments, update profile

router.get('/:id', (req, res) => {
	const { id } = req.params;
	User.findOne(id).then((user) => {
		console.log('user', user);
		res.send(user);
	});
});

router.post('/:id/edit', (req, res) => {
	const { id } = req.params;
	console.log(id);
	User.findOne({ id }).then((existingUser) => {
		//TO EXPAND
		res.send('holla');
	});
});

router.get('/:id/bookshelf', (req, res) => {
	const { _id } = req.body;

	User.findById({ id }).populate({ path: 'bookshelf', select: 'title' });
});

module.exports = router;
