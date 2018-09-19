const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String
		//required: true,
		//unique: true
	},
	password: {
		type: String
		//required: true
	},
	profilePicture: {
		type: String,
		default:
			'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg'
	},
	language: {
		type: String
		//required: true
	},
	zipcode: String,
	bookshelf: {
		type: String
	},
	wishlist: [ String ]
});

module.exports = mongoose.model('User', userSchema);
