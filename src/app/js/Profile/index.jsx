import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
	render() {
		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
		console.log(this.props.user);
		return (
			<div className="container">
				<img src={this.props.user.profilePicture} height="360" alt={this.props.user._id} />
				<br />
				{this.props.user._id}
				<br />
				{this.props.user.email}
				<br />
				{this.props.user.language}
			</div>
		);
	}
}

export default Profile;
