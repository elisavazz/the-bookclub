import React from 'react';
import BookAvailability from './BookAvailability';
import { api } from 'cloudinary';

const UserBookshelf = ({ user, books, updateAvailability }) => {
	const mappedBookshelf = books.map((book) => {
		return <BookAvailability book={book} updateAvailability={updateAvailability} />;
	});
	return (
		<div className="user-bookshelf">
			<h3 className="detail-title">your personal bookshelf:</h3>
			{mappedBookshelf}
		</div>
	);
};
/* <div key={book._id} className="book">
<h4>{book.title}</h4>
<img src={book.bookCover} width="150px" alt="" />
<br />
</div> */

export default UserBookshelf;
