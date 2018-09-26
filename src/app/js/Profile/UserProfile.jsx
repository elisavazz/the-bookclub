import React from 'react';
import { Link } from 'react-router-dom';
import UserBookshelf from './UserBookshelf';

const UserProfile = ({ user, view, books, toggleEdit }) => {
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
					<br />
					<h5>contact</h5>
					<p>{user.email}</p>
					<br />
					<h5>reading</h5>
					<p>{langsList}</p>
					<br />
				</div>

				<button onClick={() => toggleEdit()} className="link">
					Edit
				</button>
			</div>
			<UserBookshelf user={user} books={books} />
		</div>
	);
};
{
	/* <button onClick={() => onclickbutton()} className="form-btn">
edit
</button> */
}
export default UserProfile;
