import React from 'react';

const BookAvailability = ({ book, updateAvailability }) => {
	console.log(book.title + ', ' + book.author + ', ' + book.availability);

	if (book.availability === false)
		return (
			<div className="book-slot ">
				<h5>
					{book.title}, by {book.author}
				</h5>
				<div className="status-container">
					<div className=" status-icon lent-book " />
					<label>Status: Lent</label>
				</div>
				<button
					className="btn availability-btn lend-btn "
					onClick={(evt) => updateAvailability(book._id, book.availability)}
				>
					Got it back
				</button>
			</div>
		);
	else
		return (
			<div className="book-slot ">
				<h5>
					{book.title}, by {book.author}
				</h5>
				<div className="status-container">
					{' '}
					<div className="available-book status-icon" />
					<label>Status: Available </label>
				</div>
				<button
					className="btn availability-btn lend-btn "
					onClick={(evt) => updateAvailability(book._id, book.availability)}
				>
					Lend
				</button>
			</div>
		);
};
export default BookAvailability;
