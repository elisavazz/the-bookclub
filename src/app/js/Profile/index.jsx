import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import UserProfile from './UserProfile';
import UserBookshelf from './UserBookshelf';
import NotFound from '../NotFound';
import api from '../utils/api';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			userId: props.user._id,
			username: props.user.username,
			language: props.user.language,
			location: props.user.location,
			error: '',
			books: props.user.bookshelf
		};

		this._toggleEdit = this._toggleEdit.bind(this);
		this._handleInputChange = this._handleInputChange.bind(this);
		this._updateEdit = this._updateEdit.bind(this);
		this._updateAvailability = this._updateAvailability.bind(this);
	}

	// i want to edit my profile i toggle edit

	_toggleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	///handleclick wants to toggle the edit feature of the page

	render() {
		//console.log(this.props);
		console.log(this.state.books);
		if (!this.props.user) return <Redirect to="/auth/sign-in" />;
		if (this.state.isEditing) {
			return (
				<EditProfile
					handleInputChange={this._handleInputChange}
					username={this.state.username}
					language={this.state.language}
					location={this.state.location}
					error={this.state.error}
					toggleEdit={this._toggleEdit}
					updateEdit={this._updateEdit}
				/>
			);
		} else
			return (
				<UserProfile
					user={this.props.user}
					view={this.state.view}
					books={this.state.books}
					toggleEdit={this._toggleEdit}
				/>
			);
	}
	_updateAvailability() {}
	_handleInputChange(key, newValue) {
		this.setState({
			[key]: newValue
		});
	}
	_updateEdit() {
		// this.setState({
		// 	error: ''
		// });
		console.log('hello from update edit');
		api
			.post(`/api/auth/edit`, {
				username: this.state.username,
				language: this.state.language,
				location: this.state.location
			})
			.then((data) => {
				localStorage.setItem('identity', data.token);
				this.props.setUser();
				this.props.history.push('/');
			})
			.catch((err) => {
				this.setState({
					error: err.description
				});
			});
	}
}

export default Profile;
