import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class BookInfo extends Component {
	render() {
		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection
		console.log(this.props.user);
		return (
			<div className="container">
				<h1>These are your books {this.props.user._id} !</h1>
				<img src={this.props.book.bookCover} height="360" alt={this.props.book._id} />
				<br />
				{this.props.book.title}
				<br />
				{this.props.book.author}
			</div>
		);
	}
}

export default BookInfo;
