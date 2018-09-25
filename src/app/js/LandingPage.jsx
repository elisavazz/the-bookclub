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
					<br />
					<Link className="button" to="/auth/sign-up">
						Join
					</Link>

					<br />
				</div>
			</section>
			<section className="details">
				<div className="container">
					<p>1.Join 2.swap!</p>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
