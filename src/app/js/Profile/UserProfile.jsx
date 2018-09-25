import React from 'react';

const UserProfile = ({ user, view, onclickbutton }) => {
	let langsList = '';
	for (let i = 0; i < user.language.length; i++) {
		if (i === 0) langsList += user.language[i];
		langsList += `, ${user.language[i]}`;
	}

	console.log(user);
	return (
		<div className="profile-wrapper">
			<img className="profile-picture" src={user.profilePicture} height="360" alt={user._id} />
			<br />
			<h3 className="titling">{user.username}</h3>
			<br />
			<p>{user.email}</p>
			<br />
			<p>{langsList}</p>
			<br />
			<br />
			<button onClick={onclickbutton} className="form-btn">
				edit
			</button>
		</div>
	);
};

export default UserProfile;
