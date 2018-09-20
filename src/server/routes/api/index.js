const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const bookRoutes = require('./books');
const userRoutes = require('./user');
const commentRoutes = require('./comment');
const { userMiddleware, checkLoggedIn } = require('../../utils/middleware');

router.use(userMiddleware);

router.get('/', (req, res) => {
	res.send({ hello: true });
});

router.get('/protected', checkLoggedIn, (req, res) => {
	console.log('USER', req.user);
	res.send({ success: true });
});

router.use('/auth', authRoutes);
router.use('/books', bookRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);

router.use((req, res) => {
	res.status(404).send({ error: 'not-found' });
});

module.exports = router;
