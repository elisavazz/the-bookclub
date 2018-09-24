import React from 'react';
import Search from './Search';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

const AllBooks = ({ books, search, searchBooks, handleSearch, contact, languages }) => {
	const MappedBooks = books.map((book) => {
		return (
			<div key={book._id} className="book">
				<h4>
					<Link to="/">{book.title}</Link>
				</h4>
				<img src={book.bookCover} width="150px" alt="" />
				<br />
				<a href={`mailto:${book.owner.email}`}>Contact</a>
			</div>
		);
	});
	return (
		<div className="container">
			<Search
				books={books}
				search={search}
				searchBooks={searchBooks}
				handleSearch={handleSearch}
				languages={languages}
			/>

			<div className="books-container">{MappedBooks}</div>
		</div>
	);
};
export default AllBooks;
