import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Auth from './Auth';
import Home from './Home';
import Navigation from './Navigation';
import Profile from './Profile';
import NotFound from './NotFound';
import api from './utils/api';
import Bookshelf from './Bookshelf';
import Book from './Book';
import Chat from './Chat';
import Comment from './Comment';
import LandingPage from './LandingPage';

class Application extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: this._setUser(true),
			books: []
		};

		this._setUser = this._setUser.bind(this);
		this._resetUser = this._resetUser.bind(this);
	}


	componentDidMount() {
		this._setUser();
		api.get(`/api/books/available`).then((books) => {
			this.setState({ books: books });
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navigation user={this.state.user} />
					<Switch>
						<Route exact path="/" render={() => <Home user={this.state.user} />} />
						<Route exact path="/add" render={() => <Book user={this.state.user} />} />
						<Route exact path="/profile" render={() => <Profile user={this.state.user} />} />
						<Route path="/books" render={() => <Bookshelf user={this.state.user} />} />
						<Route path="/chat" render={() => <Chat user={this.state.user} />} />
						<Route path="/comment" render={() => <Comment user={this.state.user} />} />
						<Route path="/landing" render={() => <LandingPage books={this.state.books} />} />
						<Route
							path="/auth"
							render={() => <Auth setUser={this._setUser} resetUser={this._resetUser} />}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}

	_resetUser() {
		this.setState({
			user: null
		});
	}

	_setUser(init, cb) {
		const token = localStorage.getItem('identity');
		if (token) {
			const decoded = jwtDecode(token);
			delete decoded.iat;
			if (init) return decoded;
			this.setState({ user: decoded }, cb);
		} else {
			return null;
		}
	}
}

export default Application;
