const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
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
		default: 'https://image.flaticon.com/icons/svg/1150/1150165.svg'
	},
	language: {
		type: String,
		required: true
	},
	estimatedReadingDays: {
		type: Number,
		required: true
	},
	availability: {
		type: Boolean,
		default: false
	},
	borrowDate: {
		type: Date
	},
	isbn: String,
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Book', bookSchema);
