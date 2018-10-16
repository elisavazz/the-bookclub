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
			<div className="profile-wrapper profile-wrapper-view">
				<img className="profile-picture " src={user.profilePicture} alt={user._id} />

				<div className="user-details">
					<br />
					<h3 className="titling fill-info">{user.username}</h3>

					<p>{user.email}</p>

					<h5 className="fill-info">reading and speaking</h5>
					<p>{langsList}</p>

					<h5 className="fill-info">currently here</h5>
					<p>{user.location}</p>
				</div>

				<button
					className="btn transparent-btn transparent-btn-edit"
					onClick={() => toggleEdit()}
				>
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
