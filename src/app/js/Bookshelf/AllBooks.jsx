import React from 'react';
import Search from './Search';

import BookItem from './BookItem';

const AllBooks = ({ userId, books, search, searchBooks, handleSearch, contact, languages }) => {
	//FIX SHUFFLE!

	function shuffleUsingRandomSwapping(books) {
		var j,
			x,
			i = 0,
			len = books.length;
		for (i; i < len; i++) {
			j = Math.floor(Math.random() * len);
			x = books[i];
			books[i] = books[j];
			books[j] = x;
		}
		return books;
	}
	let NotFound;

	//maybe fix the message
	if (books.length <= 0) {
		NotFound = (
			<div className="top-padding">
				<h2 className="welcome-msg">we found no books. try another search?</h2>
			</div>
		);
	}

	const MappedBooks = shuffleUsingRandomSwapping(books).map((book) => {
		return <BookItem userId={userId} book={book} />;
	});
	return (
		<div>
			<div className="search-form top-padding book-container">
				<Search
					books={books}
					search={search}
					searchBooks={searchBooks}
					handleSearch={handleSearch}
					languages={languages}
				/>
				{NotFound}
				<div className="books-wrap book-container">{MappedBooks}</div>
			</div>
		</div>
	);
};
{
	/* <div className="books-wrap">{Shuffle(books)}</div>; */
}
//<div className="books-wrap">{MappedBooks}</div>
export default AllBooks;
