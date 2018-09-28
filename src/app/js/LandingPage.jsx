import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const LandingPage = (props) => {
	return (
		<div>
			<div className="container landing">
				<section>
					<div className=" landing-container welcome-msg">
						<h1 className="detail-title">
							<span className="underlined-text">Share</span> your reads
							<br />
							and open up to the <span className="underlined-text">community</span>.
						</h1>
						<p className="book-title">take part to the sharing-based library</p>
						<br />
						<Link className="button" to="/auth/sign-up">
							Join
						</Link>
						<br />
					</div>
					<div className="separator" />
				</section>

				<section className="details">
					<div className="container landing-container wrap-container">
						<div className="content-left" />
						<div className="wow content-right">
							<ScrollAnimation animateIn="fadeIn" className="welcome-msg">
								<h2 className="titling">
									A very good book is like a{' '}
									<span className="underlined-text">good friend</span>
								</h2>
								<br />
								<p className="subtitle book-title">
									Meeting the readers community is easy: <br />sign up, update your
									location, and get ready to swap!
								</p>
								<br />
							</ScrollAnimation>
						</div>
					</div>
				</section>
			</div>
			<footer className="footer">
				<p>
					<span className="navBarBrand underlined-text">
						<b>Bookish</b>
					</span>. coded with <i className="material-icons icon-center">favorite</i> by elisa
				</p>
			</footer>
		</div>
	);
};

export default LandingPage;
