import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AllBooks from './AllBooks';
import api from '../utils/api';

class BookInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};
		this._updateSearch = this._updateSearch.bind(this);
		this._addToBookshelf = this._addToBookshelf.bind(this);
	}

	componentDidMount() {
		api.get('/api/books/all').then((books) => {
			this.setState({ books: books });
		});
	}

	render() {
		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
		let mappedBooks = this.state.books.map((book) => {
			return (
				<div key={book._id} className="book">
					<h4>
						<Link to="#">{book.title}</Link>
					</h4>
					<img src={book.bookCover} width="150px" alt="" />
					<br />
					<button onClick={() => this._addToBookshelf(book._id)}>Add to my bookshelf</button>
				</div>
			);
		});
		return (
			<div className="container">
				<h1>Hello {this.props.user._id}, these are all the books !</h1>
				<div className="bookWrapper">
					<input type="text" onChange={(evt) => this._updateSearch(evt.target.value)} />
					{mappedBooks}
				</div>
			</div>
		);
	}

	_updateSearch(value) {
		api.get(`/api/books/language/${value}`).then((books) => {
			this.setState({ books: books });
		});
	}
	_addToBookshelf(id) {
		api
			.post(`/api/books/add-to-bookshelf`, {
				id: id
			})
			.then((result) => {
				//console.log(result);
			});
	}
}

export default BookInfo;
