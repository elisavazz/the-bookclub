import React from 'react';
import Bookshelf from './Bookshelf';
import LandingPage from './Bookshelf';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
	if (!props.user) return <Redirect to="/landing" />;
	return <Redirect to="/books" />;

	// return (
	// 	<div className="container">
	// 		{props.user && <h1>Hello, {props.user.username}</h1>}

	// 		<br />

	// 		<q>the world is a book and those who don't travel only read one page</q>
	// 		{!props.user && <LandingPage />}
	// 	</div>
	// );
};

//`Find books your native language, anywhere you are.`
export default Home;
