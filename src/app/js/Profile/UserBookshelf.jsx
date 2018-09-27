import React from 'react';
import BookAvailability from './BookAvailability';

const UserBookshelf = ({ user, books, updateAvailability }) => {
	const mappedBookshelf = books.map((book) => {
		return <BookAvailability book={book} updateAvailability={updateAvailability} />;
	});
	return (
		<div className="user-bookshelf">
			<h3 className="detail-title">your personal bookshelf:</h3>
			<div className="top-padding">{mappedBookshelf}</div>
		</div>
	);
};

/* <div key={book._id} className="book">
<h4>{book.title}</h4>
<img src={book.bookCover} width="150px" alt="" />
<br />
</div> */

export default UserBookshelf;
