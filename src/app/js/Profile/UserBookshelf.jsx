import React from 'react';

class UserBookshelf extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};
	}

	componentDidMount() {
		api.get('/api/books/available').then((books) => {
			this.setState({ books: books });
		});
	}
	render() {
		return (
			<div className="container">
				<h1>Your bookshelf!</h1>

				<div key={book._id} className="book">
					<h4>{book.title}</h4>
					<img src={book.bookCover} width="150px" alt="" />
					<br />
				</div>
			</div>
		);
	}
}

export default UserBookshelf;
