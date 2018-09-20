const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	author: {
		type: String,
		required: true
	},
	genre: [ String ],
	bookCover: {
		type: String,
		default:
			'https://vignette.wikia.nocookie.net/2007scape/images/7/7a/Mage%27s_book_detail.png/revision/latest?cb=20180310083825'
	},
	language: {
		type: String,
		required: true
	},
	extimatedReadingDays: {
		type: Number,
		required: true
	},
	availability: Boolean,
	borrowDate: {
		type: Date
	},
	isbn: String
});

module.exports = mongoose.model('Book', bookSchema);
