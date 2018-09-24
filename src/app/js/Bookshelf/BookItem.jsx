import React from 'react';
import { Link } from 'react-router-dom';
class BookItem extends React.Component {
	render() {
		if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection

		return (
			<div className="container">
				<p>here youre gonna find your book</p>
			</div>
		);
	}
}
export default BookItem;
