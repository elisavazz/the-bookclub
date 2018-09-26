import React from 'react';

class UserBookshelf extends React.Component {
	//AvailabilityCheckmark() {
	// 	if (book.availability === true) {
	// 		return <input type="checkbox" onChange={console.log('hi')} value={book.availability} />;
	// 	}
	// }
	render() {
		const mappedBookshelf = this.props.user.bookshelf.map((book) => {
			console.log(book.title + ', ' + book.availability);
			return (
				<form>
					<h5>
						{book.title}, by {book.author}
					</h5>
					<label>currently available </label>
					<input
						type="checkbox"
						onChange={(evt) => console.log(book._id)}
						value={book.availability}
					/>
				</form>
			);
		});
		return (
			<div className="user-bookshelf">
				<h2 className="detail-title">your personal bookshelf:</h2>
				{mappedBookshelf}
			</div>
		);
	}
}

/* <div key={book._id} className="book">
<h4>{book.title}</h4>
<img src={book.bookCover} width="150px" alt="" />
<br />
</div> */

export default UserBookshelf;
