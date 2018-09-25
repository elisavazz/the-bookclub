import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import UserProfile from './UserProfile';
import NotFound from '../NotFound';
import api from '../utils/api';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			username: props.user.username,
			language: props.user.language,
			error: ''
		};

		this._toggleEdit = this._toggleEdit.bind(this);
		this._handleInputChange = this._handleInputChange.bind(this);
	}
	// i want to edit my profile

	_toggleEdit() {
		this.setState({ isEditing: !this.state.isEditing });
	}

	///handleclick wants to toggle the edit feature of the page

	render() {
		console.log(this.state);
		if (!this.props.user) return <Redirect to="/auth/sign-in" />;
		if (this.state.isEditing) {
			return (
				<EditProfile
					handleInputChange={this._handleInputChange}
					username={this.state.username}
					language={this.state.language}
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
					toggleEdit={this._toggleEdit}
				/>
			);
	}

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
				language: this.state.language
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
