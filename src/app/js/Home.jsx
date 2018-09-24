import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const Home = (props) => {
	// let homepage;
	// if (props.user) {
	// 	homepage = (
	// 		<Link className="link nav-link" to="/auth/sign-in">
	// 			Join!
	// 		</Link>
	// 	);
	// } else {
	// 	homepage = <Bookshelf />;
	// }

	console.log(props.user);
	return (
		<div className="container">
			<h1>
				{props.user ? (
					`Hello, ${props.user.username}`
				) : (
					`Find books your native language, anywhere you are.`
				)}
			</h1>
			<br />
			<Link className="button" to="/auth/sign-up">
				Join
			</Link>
			<br />
			<br />
			<q>the world is a book and those who don't travel only read one page</q>
		</div>
	);
};

export default Home;
