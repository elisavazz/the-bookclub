import React from 'react';
import Search from './Search';
import BookItem from './BookItem';
import { Link } from 'react-router-dom';

const AllBooks = ({ books, search, searchBooks, handleSearch, addToBookshelf }) => {
	const MappedBooks = books.map((book) => {
		return (
			<div key={book._id} className="book">
				<h4>
					<Link to="/">{book.title}</Link>
				</h4>
				<img src={book.bookCover} width="150px" alt="" />
				<br />
				<button onClick={() => addToBookshelf(book._id)}>Add to my bookshelf</button>
			</div>
		);
	});
	return (
		<div className="container">
			<Search search={search} searchBooks={searchBooks} handleSearch={handleSearch} />
			{MappedBooks}
		</div>
	);
};
export default AllBooks;

// const List = ({ pokemon, catchPokemon, search, handleSearchChange, searchPokemon }) => {
//     const mappedPokemon = pokemon
//         .filter((el, index) => index < 21)
//         .map(el => <Card pokemon={el} catchPokemon={catchPokemon} key={el.id} />)
//     return (
//         <div className="container">
//             <h1>Pokemon</h1>
//             <Search
//                 search={search}
//                 handleSearchChange={handleSearchChange}
//                 searchPokemon={searchPokemon}
//             />
//             <div className="poke-flex">{mappedPokemon}</div>
//         </div>
//     )
// }

// export default List
