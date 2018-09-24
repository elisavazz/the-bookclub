import React from 'react';

const UserProfile = ({ user }) => {
	return (
		<div className="profile-wrapper">
			<img src={user.profilePicture} height="360" alt={user._id} />
			<br />
			{user.username}
			<br />
			{user.email}
			<br />
			{user.language}
			<br />
			<br />
		</div>
	);
};

export default UserProfile;
