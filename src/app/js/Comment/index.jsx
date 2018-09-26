import React, { Component } from 'react';
import Comments from './Comments';
import api from '../utils/api';

class Comment extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: []
		};

		//	this._add = this._add.bind(this);
	}
	componentDidMount() {
		api.get(`/api/comment/all`).then((comments) => {
			console.log('comments!' + comments);
			this.setState({ comments });
		});
	}
	//
	render() {
		console.log(this.state);
		return (
			<div>
				<Comments comments={this.state.comments} />
			</div>
		);
	}

	_add() {
		const coverDeclaration = { bookCover: this.state.cover };
		console.log('_add ADDS A BOOK');
		api
			.post(
				`/api/books/add`,
				{
					title: this.state.title,
					author: this.state.author,
					genre: this.state.genre,
					language: this.state.language,
					bookCover: coverDeclaration,
					estimatedReadingDays: this.state.estimatedReadingDays,
					availability: this.state.availability,
					isbn: this.state.isbn
				},
				coverDeclaration
			)
			.then((data) => {
				this.props.history.push('/');
				console.log(data);
			})
			.catch((err) => {
				this.setState({
					error: err.description
				});
			});
	}
}

export default Comment;
