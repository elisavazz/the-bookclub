import React from 'react';

class UserBookshelf extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		books: []
	// 	};
	// }
	componentDidMount() {
		console.log('USER ID ' + this.props.user._id);
		// api.get(`/api/books/user-bookshelf`, {
		// 	id: this.props.user._id
		// });
		// .then((languages) => {
		// 	this.setState({ books: books });
		// });
	}
	// componentDidMount() {
	// 	api.get('/api/books/mine').then((books) => {
	// 		this.setState({ books: books });
	// 	});
	// }
	render() {
		return (
			<div className="user-bookshelf">
				<h1>Your bookshelf!</h1>
			</div>
		);
	}
}

/* <div key={book._id} className="book">
<h4>{book.title}</h4>
<img src={book.bookCover} width="150px" alt="" />
<br />
</div> */

export default UserBookshelf;
