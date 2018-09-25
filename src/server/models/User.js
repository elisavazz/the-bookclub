const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: String,
	password: {
		type: String,
		required: true
	},
	profilePicture: {
		type: String,
		default:
			'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg'
	},
	language: [ String ],
	location: {
		type: String,
		default: 'Point'
	},
	coordinates: [ Number ],
	bookshelf: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Book'
		}
	],
	wishlist: [ String ]
});

module.exports = mongoose.model('User', userSchema);
