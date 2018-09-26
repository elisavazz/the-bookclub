import React from 'react';

const Comments = ({ comments }) => {
	const MappedComments = comments.map((comment) => {
		return (
			<div className="container wrap-container">
				<p>{comment.title}</p>
				<br />
				<p>{comment.comment}</p>
				<p>{comment.date}</p>
			</div>
		);
	});
	return <div>{MappedComments}</div>;
};

export default Comments;
