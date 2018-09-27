import React from 'react';
import { Link } from 'react-router-dom';
import UserBookshelf from './UserBookshelf';

const UserProfile = ({ user, view, books, toggleEdit, updateAvailability }) => {
	let langsList = '';
	for (let i = 0; i < user.language.length; i++) {
		if (i === 0) langsList += user.language[i];
		else langsList += `, ${user.language[i]}`;
	}

	return (
		<div className="container wrap-container">
			<div className="profile-wrapper">
				<img className="profile-picture" src={user.profilePicture} height="360" alt={user._id} />
				<div className="user-details">
					<br />
					<h3 className="titling">{user.username}</h3>

					<h5>contact</h5>
					<p>{user.email}</p>

					<h5>reading</h5>
					<p>{langsList}</p>

					<h5>currently here</h5>
					<p>{user.location}</p>
				</div>

				<button className="btn edit-btn" onClick={() => toggleEdit()} className="link">
					Edit
				</button>
			</div>
			<div className="separator-vertical" />
			<UserBookshelf user={user} books={books} updateAvailability={updateAvailability} />
		</div>
	);
};
{
	/* <button onClick={() => onclickbutton()} className="form-btn">
edit
</button> */
}
export default UserProfile;
