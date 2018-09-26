import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
	console.log(props.user);

	return (
		<div className="landing">
			<section>
				<div className="container landing-container">
					<h1 className="titling">
						Find books your native language,<br /> anywhere you are.
					</h1>
					<p>like a library, but you just need an email address</p>
					<br />
					<Link className="button" to="/auth/sign-up">
						Join
					</Link>

					<br />
				</div>
			</section>
			<section className="details">
				<div className="container landing-container">
					<h2>get in touch with your local community of readers</h2>
					<p className="subtitle">Find what to want to read, contact, borrow</p>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
