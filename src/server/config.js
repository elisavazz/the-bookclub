module.exports = {
	IS_PRODUCTION: process.env.NODE_ENV === 'production',
	PORT: process.env.PORT || 3000,
	MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/the-bookclub',
	SECRET_JWT_PASSPHRASE: 'TWLom9RDbmGYBtkHHPe4m8pKswyUY',
	CLOUDINARY_NAME: 'vazzz',
	CLOUDINARY_KEY: '964288365416837',
	CLOUDINARY_SECRET: 'Y8TAPydKy-b2iWDQkdBWEH5TNVY'
};
