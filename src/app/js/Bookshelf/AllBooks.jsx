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

	//maybe fix the message
	if (books.length <= 0) return <h2>we found no books. try another search?</h2>;
	const MappedBooks = shuffleUsingRandomSwapping(books).map((book) => {
		return <BookItem userId={userId} book={book} />;
	});
	return (
		<div className="book-container">
			<div className="search-form top-padding">
				<Search
					books={books}
					search={search}
					searchBooks={searchBooks}
					handleSearch={handleSearch}
					languages={languages}
				/>
				<div className="books-wrap">{MappedBooks}</div>
			</div>
		</div>
	);
};
{
	/* <div className="books-wrap">{Shuffle(books)}</div>; */
}
//<div className="books-wrap">{MappedBooks}</div>
export default AllBooks;
