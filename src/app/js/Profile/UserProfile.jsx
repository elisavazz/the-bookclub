import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = ({ user, view, toggleEdit }) => {
	let langsList = '';
	for (let i = 0; i < user.language.length; i++) {
		if (i === 0) langsList += user.language[i];
		else langsList += `, ${user.language[i]}`;
	}

	return (
		<div className="profile-wrapper">
			<img className="profile-picture" src={user.profilePicture} height="360" alt={user._id} />
			<br />
			<h3 className="titling">{user.username}</h3>
			<br />
			<h5>contact</h5>
			<p>{user.email}</p>
			<br />
			<h5>reading</h5>
			<p>{langsList}</p>
			<br />
			<br />

			<button onClick={() => toggleEdit()} className="link">
				Edit
			</button>
		</div>
	);
};
{
	/* <button onClick={() => onclickbutton()} className="form-btn">
edit
</button> */
}
export default UserProfile;
