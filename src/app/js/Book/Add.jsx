import React from 'react';
import { Redirect } from 'react-router-dom';

class Add extends React.Component {
	componentDidMount() {
		this.props.handleInputChange('title', '');
		this.props.handleInputChange('author', '');
		this.props.handleInputChange('genre', '');
		//BOOKCOVER HAS TO BE UPLOADED
		this.props.handleInputChange('estimatedReadingDays', '');
		this.props.availabilityCheck('availability', '');
		this.props.handleInputChange('isbn', '');
	}
	render() {
		return (
			<div className="container">
				<h1 className="titling">add a book!</h1>
				<p>
					{' '}
					<span className="asterisk">*</span> please fill in these areas
				</p>
				<input
					type="title"
					value={this.props.title}
					onChange={(evt) => this.props.handleInputChange('title', evt.target.value)}
					className="input"
					placeholder="Title"
				/>
				<span className="asterisk">*</span>
				<br />
				<br />
				<input
					type="author"
					value={this.props.author}
					onChange={(evt) => this.props.handleInputChange('author', evt.target.value)}
					className="input"
					placeholder="Author"
				/>
				<span className="asterisk">*</span>
				<br />
				<br />
				<input
					type="genre"
					value={this.props.genre}
					onChange={(evt) => this.props.handleInputChange('genre', evt.target.value)}
					className="input"
					placeholder="genre"
				/>
				<br />
				<br />
				<input
					type="language"
					value={this.props.language}
					onChange={(evt) => this.props.handleInputChange('language', evt.target.value)}
					className="input"
					placeholder="language"
				/>
				<span className="asterisk">*</span>
				<br />
				<br />
				<input
					type="file"
					value={this.props.cover}
					onChange={(evt) => this.props.handleInputChange('cover', evt.target.files[0])}
					placeholder="Book cover"
				/>
				<br />
				<br />
				<input
					type="number"
					value={this.props.estimatedReadingDays}
					onChange={(evt) =>
						this.props.handleInputChange('estimatedReadingDays', evt.target.value)}
					className="input"
					placeholder="estimatedReadingDays"
					min="0"
				/>{' '}
				<span className="asterisk">*</span>
				<br />
				<br />
				<input
					type="isbn"
					value={this.props.isbn}
					onChange={(evt) => this.props.handleInputChange('isbn', evt.target.value)}
					className="input"
					placeholder="isbn"
				/>
				<br />
				<br />
				<label htmlFor="">
					<input
						type="checkbox"
						onChange={(evt) =>
							this.props.availabilityCheck('availability', evt.target.value)}
						value={this.props.availability}
					/>{' '}
					is your book currently available?
				</label>
				<br />
				<br />
				<button className="button" onClick={() => this.props.add()}>
					ADD
				</button>
				<p>{this.props.error}</p>
				<p>WRITE A COMMENT</p>
			</div>
		);
	}
}

export default Add;
