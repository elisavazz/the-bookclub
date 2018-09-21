import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

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
			availability: true,
			isbn: ''
		};

		this._handleInputChange = this._handleInputChange.bind(this);
		//this._availabilityInputChange=this.availabilityInputChange.bind(this);
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
							availabilityInputChange={this._availabilityInputChange}
							add={this._add}
							title={this.state.title}
							author={this.state.author}
							genre={this.state.genre}
							language={this.state.language}
							estimatedReadingDays={this.state.estimatedReadingDays}
							availability={this.state.availability}
							error={this.state.error}
						/>
					)}
				/>
				<Route component={NotFound} />
			</Switch>
		);
	}

	_handleInputChange(key, newValue) {
		console.log(newValue);
		this.setState({
			[key]: newValue
		});
	}

	_availabilityInputChange() {
		console.log('AVAILABLE');
		const newAvailability = { ...this.state.availability };
		//	newAvailability = !newAvailability;
		this.setState({ availability: newAvailability });
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
				this.props.history.push('/');
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
