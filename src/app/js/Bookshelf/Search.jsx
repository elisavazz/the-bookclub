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
				placeholder="search title"
			/>
			<input
				value={search.location}
				onChange={(event) => handleSearch('location', event.target.value)}
				className="input"
				placeholder="search city"
			/>

			<select
				name="language"
				value={search.language}
				onChange={(event) => handleSearch('language', event.target.value)}
				id="language"
				className="select-form"
			>
				{' '}
				<option value="" selected>
					{' '}
					search a language{' '}
				</option>
				<option value="spanish"> Spanish </option>
				<option value="italian"> Italian </option>
				<option value="english"> English </option>
				<option value="german"> German </option>
				<option value="polish"> Polish </option>
				<option value="russian"> Russian</option>
				<option value="japanese"> japanese</option>
			</select>
			<input type="submit" value="Search" className="form-btn" />
		</form>
	);
};

export default Search;
