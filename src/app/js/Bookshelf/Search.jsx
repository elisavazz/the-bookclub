import React from 'react';

const Search = ({ search, searchBooks, handleSearch }) => {
	return (
		<form className="search" onSubmit={searchBooks}>
			<input
				value={search.title}
				onChange={(event) => handleSearch('title', event.target.value)}
			/>
			<input type="submit" value="Search" />
		</form>
	);
};

export default Search;
