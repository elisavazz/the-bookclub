import React from 'react';
import Search from './Search';

import BookItem from './BookItem';

const AllBooks = ({ userId, books, search, searchBooks, handleSearch, contact, languages }) => {
	//FIX SHUFFLE!
	function Shuffle() {
		var arrLenght = someArray.length - 1;
		for (var i = arrLenght; i > 0; i--) {
			console.log(i);
		}
		// var toSwap; // The index we will swap  (i.e. the random number)
		// var temp; // A temporary variable to hold reference to index variable i
		// for (var i = arrLenght; i > 0; i--) {
		// 	toSwap = Math.floor(Math.random() * i);
		// 	temp = someArray[i];
		// 	someArray[i] = someArray[toSwap];
		// 	someArray[toSwap] = temp;
		// for (var i = 0; i < someArray.length; i++) {
		// 	return <BookItem userId={userId} book={someArray[i]} />;
		// }
		// }
	}

	const mappedBooks = books.map((book) => {
		return <BookItem userId={userId} book={book} />;
	});
	//maybe fix the message
	if (books.length <= 0) return <h2>we found no books. try another search?</h2>;

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
			</div>
			<div className="books-wrap">{mappedBooks}</div>
		</div>
	);
};
//<div className="books-wrap">{MappedBooks}</div>
export default AllBooks;
