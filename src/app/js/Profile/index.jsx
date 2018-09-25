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
			books: [],
			view: 'profile'
		};

		this._onClickButton1 = this._onClickButton1.bind(this);
	}

	componentDidMount() {
		this.setState({ view: 'profile' });
	}
	_onClickButton1 = () => {
		this.setState({ view: 'edit' });
	};
	///handleclick wants to toggle the edit feature of the page

	render() {
		let ProfileWrap = <UserProfile user={this.props.user} />;
		if (this.state.view === 'profile')
			return (
				<UserProfile
					user={this.props.user}
					view={this.state.view}
					onclickbutton={this.state._onClickButton1}
				/>
			);
		if (this.state.view === 'edit')
			return (
				<EditProfile
					user={this.props.user}
					view={this.state.view}
					onclickbutton={this.state._onClickButton1}
				/>
			);

		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
		console.log(this.props.user);
		return <div className="container">{ProfileWrap}</div>;
	}
}

export default Profile;
