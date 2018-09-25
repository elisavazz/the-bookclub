import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import api from '../utils/api';

import Add from './Add';
import NotFound from '../NotFound';

class Book extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			author: '',
			genre: '',
			language: '',
			bookCover: undefined,
			estimatedReadingDays: 0,
			availability: false,
			isbn: ''
		};

		this._handleInputChange = this._handleInputChange.bind(this);
		this._availabilityCheck = this._availabilityCheck.bind(this);
		this._add = this._add.bind(this);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/add"
					render={() => (
						<Add
							handleInputChange={this._handleInputChange}
							availabilityCheck={this._availabilityCheck}
							add={this._add}
							title={this.state.title}
							author={this.state.author}
							genre={this.state.genre}
							language={this.state.language}
							bookCover={this.state.bookCover}
							estimatedReadingDays={this.state.estimatedReadingDays}
							availability={this.state.availability}
							isbn={this.state.isbn}
							error={this.state.error}
						/>
					)}
				/>
				<Route component={NotFound} />
			</Switch>
		);
	}

	_handleInputChange(key, newValue) {
		this.setState({
			[key]: newValue
		});
	}

	_availabilityCheck(key) {
		this.setState({
			[key]: !this.state.availability
		});
	}

	_add() {
		const coverDeclaration = { bookCover: this.state.cover };
		console.log('_add ADDS A BOOK');
		api
			.post(
				`/api/books/add`,
				{
					title: this.state.title,
					author: this.state.author,
					genre: this.state.genre,
					language: this.state.language,
					bookCover: coverDeclaration,
					estimatedReadingDays: this.state.estimatedReadingDays,
					availability: this.state.availability,
					isbn: this.state.isbn
				},
				coverDeclaration
			)
			.then((data) => {
				//this.props.history.push('/books');
				return <Redirect to="/books" />;
				console.log(data);
			})
			.catch((err) => {
				this.setState({
					error: err.description
				});
			});
	}
}

export default withRouter(Book);
