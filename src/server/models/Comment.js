const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	title: String,
	book: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Book"
	},
	commentAuthor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	comment: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model("Comment", commentSchema);
