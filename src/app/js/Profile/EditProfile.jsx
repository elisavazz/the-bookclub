import React from 'react';

class EditProfile extends React.Component {
	componentDidMount() {
		this.props.handleInputChange('username', this.props.username);
		this.props.handleInputChange('language', this.props.language);
	}
	render() {
		return (
			<div className="profile-wrapper">
				<h1>edit your profile!</h1>

				<label className="fill-info">add or update your username: </label>
				<br />
				<input
					type="username"
					value={this.props.username}
					onChange={(evt) => this.props.handleInputChange('username', evt.target.value)}
					className="edit-input"
					placeholder={this.props.username}
				/>
				<br />
				<br />
				<input
					type="language"
					value={this.props.language}
					onChange={(evt) => this.props.handleInputChange('language', evt.target.value)}
					className="edit-input"
					placeholder={this.props.language}
				/>
				<br />
				<br />
				<button className="form-btn" onClick={() => this.props.updateEdit()}>
					edit
				</button>
				<br />
				<br />
				<p>{this.props.error}</p>
				<br />
				<button onClick={() => this.props.toggleEdit()} className="link">
					return to profile
				</button>
			</div>
		);
	}
}

export default EditProfile;
