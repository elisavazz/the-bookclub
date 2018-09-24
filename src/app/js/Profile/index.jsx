import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import EditProfile from './EditProfile';
import UserProfile from './UserProfile';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			books: []
		};
		this._handleClick = this._handleClick.bind(this);
	}
	///handleclick wants to toggle the edit feature of the page

	render() {
		let ProfileWrap = <UserProfile user={this.props.user} />;

		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
		console.log(this.props.user);
		return (
			<div className="container">
				{ProfileWrap}

				<button onClick={this._handleClick({ ProfileWrap })}>edit</button>
			</div>
		);
	}
	_handleClick() {
		console.log('ping');
		// if (ProfileWrap) {
		// 	ProfileWrap = <EditProfile user={this.props.user} />;
		// } else {
		// 	ProfileWrap = <UserProfile user={this.props.user} />;
		// }
		// return ProfileWrap;
	}
}

export default Profile;
