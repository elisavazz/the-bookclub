import React from 'react';

const EditProfile = ({ user }) => {
	return (
		<div className="profile-wrapper">
			<form className="editUser">
				<input
					value={search.title}
					onChange={(event) => handleSearch('title', event.target.value)}
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default EditProfile;
