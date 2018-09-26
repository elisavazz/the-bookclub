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
				<div className="container landing-container wrap-container">
					<img
						src="https://res.cloudinary.com/vazzz/image/upload/v1537941326/hand.png"
						width="300"
						height="190"
					/>
					<div className="content-right">
						<h2>get in touch with your local community of readers</h2>
						<br />
						<p className="subtitle">Find what to want to read, contact, borrow</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
