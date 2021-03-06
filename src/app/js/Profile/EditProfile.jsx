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
				<div className="profile-wrapper profile-wrapper-edit">
					<h3 className="titling">edit your profile</h3>

					<form className="top-padding">
						<label className="fill-info">update your username: </label>
						<br />
						<input
							type="username"
							value={this.props.username}
							onChange={(evt) =>
								this.props.handleInputChange('username', evt.target.value)}
							className="edit-input input "
							placeholder={this.props.username}
						/>
						<br />

						<label className="fill-info">update languages:</label>
						<br />
						<input
							type="language"
							value={this.props.language}
							onChange={(evt) =>
								this.props.handleInputChange('language', evt.target.value)}
							className="edit-input input "
							placeholder={this.props.language}
						/>
						<br />

						<label className="fill-info">update your location:</label>
						<br />
						<input
							type="location"
							value={this.props.location}
							onChange={(evt) =>
								this.props.handleInputChange('location', evt.target.value)}
							className="edit-input input "
							placeholder={this.props.location}
						/>
						<br />

						<div className="top-padding space-between">
							<button
								className="btn transparent-btn transparent-btn-clear "
								onClick={() => this.props.toggleEdit()}
							>
								<i className="material-icons">clear</i>
							</button>

							<button
								className="btn transparent-btn check-btn"
								onClick={() => this.props.updateEdit()}
							>
								<i className="material-icons">check</i>
							</button>
						</div>

						<br />
						<p>{this.props.error}</p>
					</form>
				</div>
			</div>
		);
	}
}

export default EditProfile;
