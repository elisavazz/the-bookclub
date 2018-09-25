import React from 'react';

const Search = ({ books, search, searchBooks, handleSearch, languages }) => {
	// const availableLanguages = languages.map((language) => {
	// 	console.log(language);
	// 	//return <option value=""> {language} </option>;
	// }); {availableLanguages}
	return (
		<form className="search" onSubmit={searchBooks}>
			<input
				value={search.title}
				onChange={(event) => handleSearch('title', event.target.value)}
				className="input"
			/>

			<input type="submit" value="Search" className="form-btn" />
			<select name="language" id="language">
				<option value="spanish"> Spanish </option>
				<option value="italian"> Italian </option>
				<option value="english"> English </option>
				<option value="german"> German </option>
				<option value="polish"> Polish </option>
				<option value="russian"> Russian</option>
				<option value="japanese"> japanese</option>
			</select>
		</form>
	);
};

export default Search;
