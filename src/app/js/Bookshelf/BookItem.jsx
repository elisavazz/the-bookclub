import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ userId, book }) => {
	if (userId !== book.owner._id)
		return (
			<div key={book._id} className="book-card">
				<img src={book.bookCover} width="150px" alt="" className="book-cover" />
				<br />
				<div className="book-data-wrap">
					<h3 className="book-title">
						<Link to="/" className="link-to-det">
							{book.title}
						</Link>
					</h3>
					<h5 className="fill-info">{book.author}</h5>
					<p>
						Reading days: <span className="book-detail">
							{book.estimatedReadingDays}
						</span>{' '}
					</p>
					<a
						className="email-btn"
						href={`mailto:${book.owner
							.email}?subject=Hello!%20I'm%20interested%20in%20your%20book!&body=Hello%2C%0AI%20would%20be%20interested%20in%20your%20book.%20Can%20i%20borrow%3F`}
					>
						<i className="material-icons ">email</i>
					</a>
				</div>
			</div>
		);
	return (
		<div key={book._id} className="book-card book-owned">
			<img src={book.bookCover} width="150px" alt="" className="book-cover" />
			<br />
			<div className="book-data-wrap">
				<h3 className="book-title">
					<Link to="#" className="link-to-det">
						{book.title}
					</Link>
				</h3>
				<h5 className="fill-info">{book.author}</h5>
				<p>
					Reading days: <span className="book-detail">{book.estimatedReadingDays}</span>{' '}
				</p>
			</div>
		</div>
	);
};

export default BookItem;
