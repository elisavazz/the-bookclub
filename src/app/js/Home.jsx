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
	return (
		<div className="container">
			<h1>
				{props.user ? (
					`Hello, ${props.user._id}`
				) : (
					`Join the biggest library in your native language. everywhere`
				)}
			</h1>
			<q>the world is a book and those who don't travel only read one page</q>
		</div>
	);
};

export default Home;
