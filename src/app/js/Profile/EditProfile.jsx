import React from 'react';

class EditProfile extends React.Component {
	componentDidMount() {
		//toFix Language to string
		let languageString = this.props.language.toString();
		this.props.handleInputChange('username', this.props.username);
		this.props.handleInputChange('language', languageString);
		this.props.handleInputChange('location', this.props.location);
	}
	render() {
		return (
			<div className="container">
				<div className="profile-wrapper">
					<h3 className="titling">edit your profile</h3>

					<label className="fill-info">update your username: </label>

					<input
						type="username"
						value={this.props.username}
						onChange={(evt) => this.props.handleInputChange('username', evt.target.value)}
						className="edit-input"
						placeholder={this.props.username}
					/>
					<br />

					<label className="fill-info">update languages:</label>

					<input
						type="language"
						value={this.props.language}
						onChange={(evt) => this.props.handleInputChange('language', evt.target.value)}
						className="edit-input"
						placeholder={this.props.language}
					/>
					<br />

					<label className="fill-info">update your location:</label>

					<input
						type="location"
						value={this.props.location}
						onChange={(evt) => this.props.handleInputChange('location', evt.target.value)}
						className="edit-input"
						placeholder={this.props.location}
					/>
					<br />
					<div>
						<button
							className="btn cancel-btn"
							onClick={() => this.props.toggleEdit()}
							className="link"
						>
							<i className="material-icons">clear</i>
						</button>
						<button className="btn edit-btn" onClick={() => this.props.updateEdit()}>
							<i className="material-icons">check</i>
						</button>
					</div>

					<br />
					<p>{this.props.error}</p>
				</div>
			</div>
		);
	}
}

export default EditProfile;
