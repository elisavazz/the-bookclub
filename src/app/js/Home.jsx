import React from 'react';

const Home = (props) => {
	return (
		<div className="container">
			<h1>Hello, {props.user ? props.user.username : 'Stranger'}!</h1>
			<q>So many books, so little room</q>
		</div>
	);
};

export default Home;
