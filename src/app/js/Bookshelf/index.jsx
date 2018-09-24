import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import api from '../utils/api';
import AllBooks from './AllBooks';

class BookInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: [],
			search: {
				title: '',
				genre: ''
			}
		};
		//this._updateSearch = this._updateSearch.bind(this);
		this._addToBookshelf = this._addToBookshelf.bind(this);
		this._showBook = this._showBook.bind(this);
		this._searchBooks = this._searchBooks.bind(this);
		this._handleSearch = this._handleSearch.bind(this);
		//this._showAvailable = this._showAvailable.bind(this);
	}
	componentDidMount() {
		let userLanguage = this.props.user.language[0];
		// this.props.user.language.forEach((element) => {
		// 	userLanguage + element.toLowerCase();
		// });
		console.log(userLanguage);
		api.get(`/api/books/language/${userLanguage}`).then((books) => {
			this.setState({ books: books });
		});
	}
	//	<input type="text" onChange={(evt) => this._updateSearch(evt.target.value)} />
	render() {
		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection

		return (
			<div className="container">
				<h1>Hello {this.props.user.username}, these are all the books !</h1>

				<AllBooks
					books={this.state.books}
					search={this.state.search}
					searchBooks={this._searchBooks}
					handleSearch={this._handleSearch}
					addToBookshelf={this._addToBookshelf}
				/>
			</div>
		);
	}
	_showBook(id) {
		api.get(`/api/books/${id}`).then((book) => {
			this.setState({ book: book });
		});
	}

	// _showAvailable(value) {
	// 	api.get(`/api/books/available`).then((books) => {
	// 		this.setState({ books: books });
	// 	});
	// }

	_searchBooks(event) {
		event.preventDefault();
		// api.get(`/api/books/available`).then((books) => {

		api.get(`/api/books/all?title=${this.state.search.title}`).then((books) => {
			this.setState({ books: books });
		});
	}
	// _updateSearch(value) {
	// 	api.get(`/api/books/language/${value}`).then((books) => {
	// 		this.setState({ books: books });
	// 	});
	// }
	_handleSearch(key, value) {
		const newSearch = { ...this.state.search };

		newSearch[key] = value;
		console.log(newSearch);
		this.setState({
			search: newSearch
		});
	}
	_addToBookshelf(id) {
		api
			.post(`/api/books/add-to-bookshelf`, {
				id: id
			})
			.then((result) => {
				//console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default BookInfo;
