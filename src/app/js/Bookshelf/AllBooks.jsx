import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

const AllBooks = ({ userId, books, search, searchBooks, handleSearch, contact, languages }) => {
	if (books.length <= 0) return <h1>we found no books. try another search?</h1>;
	const MappedBooks = books.map((book) => {
		if (!book) return <h2>we found no books. try another search?</h2>;
		console.log(book);
		console.log('BOK OWNER IS ' + book.owner._id);
		console.log('BOK OWNER IS ' + userId);
		if (userId !== book.owner._id)
			return (
				<div key={book._id} className="book-card">
					<h3 className="book-title">
						<Link to="/" className="link-to-det">
							{book.title}
						</Link>
					</h3>
					<h5>{book.author}</h5>
					<img src={book.bookCover} width="150px" alt="" className="book-cover" />
					<br />
					<div>
						<p>
							Estimated reading days:{' '}
							<span className="book-detail">{book.estimatedReadingDays}</span>{' '}
						</p>
						<a
							className="email-btn"
							href={`mailto:${book.owner
								.email}?subject=Hello!%20I'm%20interested%20in%20your%20book!&body=Hello%2C%0AI%20would%20be%20interested%20in%20your%20book.%20Can%20i%20borrow%3F`}
						>
							<i className="material-icons">email</i>
						</a>
					</div>
				</div>
			);
		return (
			<div key={book._id} className="book-card">
				<h3 className="book-title">
					<Link to="/" className="link-to-det">
						{book.title}
					</Link>
				</h3>
				<h5>{book.author}</h5>
				<img src={book.bookCover} width="150px" alt="" className="book-cover" />
				<br />
				<div>
					<p>
						Estimated reading days:{' '}
						<span className="book-detail">{book.estimatedReadingDays}</span>{' '}
					</p>
				</div>
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
