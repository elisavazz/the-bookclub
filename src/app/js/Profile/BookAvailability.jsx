import React from 'react';
const BookAvailability = ({ book, updateAvailability }) => {
	console.log(book.title + ', ' + book.author + ', ' + book.availability);

	if (book.availability === false)
		return (
			<div className="book-slot lent-book ">
				<h5>
					{book.title}, by {book.author}
				</h5>
				<label>Status: Lent</label>
				<button className="form-btn" onClick={(evt) => updateAvailability(book._id)}>
					CLICKME
				</button>
			</div>
		);
	else
		return (
			<div className="book-slot available-book ">
				<h5>
					{book.title}, by {book.author}
				</h5>
				<label>Status: Available </label>
				<button className="form-btn" onClick={(evt) => updateAvailability(book._id)}>
					CLICKME
				</button>
			</div>
		);
};
export default BookAvailability;
