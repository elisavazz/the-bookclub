import React from 'react';
import { Link } from 'react-router-dom';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			lat: null,
			lng: null
		};
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	handleSelect = (address) => {
		geocodeByAddress(address)
			.then((results) => {
				console.log(results);

				return getLatLng(results[0]);
			})
			.then((latLng) => {
				console.log('Success', latLng);
				this.setState({
					lat: latLng.lat,
					lng: latLng.lng
				});
			})
			.catch((error) => console.error('Error', error));
	};

	componentDidMount() {
		this.props.handleInputChange('email', '');
		this.props.handleInputChange('password', '');
		this.props.handleInputChange('language', '');
	}

	render() {
		return (
			<div className="container">
				<h1 className="titling">Sign up</h1>
				<br />
				<input
					type="email"
					value={this.props.email}
					onChange={(evt) => this.props.handleInputChange('email', evt.target.value)}
					className="input"
					placeholder="E-Mail"
				/>
				<br />
				<br />
				<input
					type="password"
					value={this.props.password}
					onChange={(evt) => this.props.handleInputChange('password', evt.target.value)}
					className="input"
					placeholder="Password"
				/>
				<br />
				<br />
				<label className="fill-info">which language do you read?</label>
				<br />
				<input
					type="language"
					value={this.props.language}
					onChange={(evt) => this.props.handleInputChange('language', evt.target.value)}
					className="input"
					placeholder="English..."
				/>
				<br />
				<br />
				<label className="fill-info">where are you?</label>
				<br />
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div>
							<input
								{...getInputProps({
									placeholder: 'Search Places ...',
									className: 'location-search-input input'
								})}
							/>
							<div className="autocomplete-dropdown-container">
								{loading && <div>Loading...</div>}
								{suggestions.map((suggestion) => {
									const className = suggestion.active
										? 'suggestion-item--active'
										: 'suggestion-item';
									// inline style for demonstration purpose
									const style = suggestion.active
										? { backgroundColor: '#fafafa', cursor: 'pointer' }
										: { backgroundColor: '#ffffff', cursor: 'pointer' };
									return (
										<div
											{...getSuggestionItemProps(suggestion, {
												className,
												style
											})}
										>
											<span>{suggestion.description}</span>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</PlacesAutocomplete>
				<br />
				<br />
				<label className="fill-info">add a picture!</label>
				<br />
				<input
					type="file"
					value={this.props.picture}
					onChange={(evt) => this.props.handleInputChange('picture', evt.target.files[0])}
					placeholder="Profile Picture"
				/>

				<br />
				<br />
				<button className="form-btn" onClick={() => this.props.sign('up')}>
					Sign Up
				</button>
				<br />
				<br />
				<p>{this.props.error}</p>
				<div className="separator" />
				<Link className="link" to="/auth/sign-in">
					Do you have an account already? Sign in instead!
				</Link>
			</div>
		);
	}
}

export default SignUp;
