import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const Home = (props) => {
	let homepage;
	if (props.user) {
		homepage = (
			<Link className="link nav-link" to="/auth/sign-in">
				Join!
			</Link>
		);
	} else {
		homepage = <Bookshelf user={this.state.user} />;
	}
	return (
		<div className="container">
			<h1>Hello, {props.user ? props.user.username : 'Stranger'}!</h1>
			<q>So many books, so little room</q>
			{homepage}
		</div>
	);
};

export default Home;
