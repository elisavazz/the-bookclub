import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
	return (
		<div className="landing">
			<section>
				<div className="container landing-container">
					<h1 className="titling">
						Find books in the language you want,<br /> anywhere you are.
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
						<h2 className="detail-title">
							<span className="underlined-text">Share</span> your books
							<br />
							and open up to the <span className="underlined-text">community</span>.
						</h2>
						<br />
						<p className="subtitle">
							update your location<br />
							find something to read
							<br />
							contact!
						</p>
						<br />
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
