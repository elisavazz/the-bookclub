import React from 'react';
import Search from './Search';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

const AllBooks = ({ books, search, searchBooks, handleSearch, contact, languages }) => {
	const MappedBooks = books.map((book) => {
		return (
			<div key={book._id} className="book-card">
				<h3 className="book-title">
					<Link to="/" className="link-to-det">
						{book.title}
					</Link>
				</h3>
				<img src={book.bookCover} width="150px" alt="" className="book-cover" />
				<br />
				<a className="email-btn" href={`mailto:${book.owner.email}`}>
					Contact
				</a>
			</div>
		);
	});
	return (
		<div className="container book-container">
			<Search
				books={books}
				search={search}
				searchBooks={searchBooks}
				handleSearch={handleSearch}
				languages={languages}
			/>

			<div className="books-wrap">{MappedBooks}</div>
		</div>
	);
};
export default AllBooks;
