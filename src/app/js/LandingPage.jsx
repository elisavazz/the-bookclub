import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
	console.log(props.user);

	return (
		<div className="container">
			<h1 className="titling">
				Find books your native language,<br /> anywhere you are.
			</h1>
			<br />
			<Link className="button" to="/auth/sign-up">
				Join
			</Link>
			<br />
		</div>
	);
};

export default LandingPage;
