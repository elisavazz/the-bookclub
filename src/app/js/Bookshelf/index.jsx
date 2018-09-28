import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import AllBooks from './AllBooks';

class BookInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: this.props.user._id,
			books: [],
			languages: [],
			search: {
				title: '',
				location: '',
				language: ''
			}
		};
		//this._updateSearch = this._updateSearch.bind(this);
		this._contact = this._contact.bind(this);
		this._showBook = this._showBook.bind(this);
		this._searchBooks = this._searchBooks.bind(this);
		this._handleSearch = this._handleSearch.bind(this);

		//this._showAvailable = this._showAvailable.bind(this);
	}
	componentDidMount() {
		//	let userLanguage = this.props.user.language[0];

		// api.get(`/api/books/language/${userLanguage}`).then((books) => {
		// 	this.setState({ books: books });
		// });

		api.get(`/api/books/available`).then((books) => {
			this.setState({ books: books });
		});
	}
	//	<input type="text" onChange={(evt) => this._updateSearch(evt.target.value)} />
	render() {
		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
		console.log(this.state);
		return (
			<div className="container  book-container">
				<h1 className="top-padding welcome-msg">
					Hello <span className="underlined-text">{this.props.user.username}</span>, what do
					you want to read?
				</h1>

				<AllBooks
					userId={this.state.user}
					books={this.state.books}
					search={this.state.search}
					searchBooks={this._searchBooks}
					handleSearch={this._handleSearch}
					contact={this._contact}
					languages={this.state.languages}
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

		api
			.get(
				`/api/books/all?title=${this.state.search.title}&location=${this.state.search
					.location}&language=${this.state.search.language}`
			)
			.then((books) => {
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

		this.setState({
			search: newSearch
		});
	}

	_contact(userId) {
		console.log(userId);
		api.get(`/api/books/${userId}/contact`).then((user) => {
			console.log(user);
		});
	}
}

export default BookInfo;
