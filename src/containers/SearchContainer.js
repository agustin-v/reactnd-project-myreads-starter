import React from 'react'
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar/SearchBar'
import Book from '../components/Book/Book'
import '../styles/App.css'

const SearchContainer = ({ booksResults, updateBooks, searchBook, updateBook }) => {

	const changeShelf = (book, shelf) => {
		updateBook(book, shelf)
	}

	const handleChange = (query) => {
		if(query.trim().length === 0){
			updateBooks('books')
			searchBook(query.trim())
		}else {
			searchBook(query.trim())
		}
	}

	return (
		<div>
			<div className="search-books">
				<SearchBar searchBook={searchBook} updateBooks={updateBooks} change={handleChange}/>
				<div className="search-books-results">
					<ol className="books-grid">
						{booksResults.length > 0?
							booksResults.map((book, index) => {
								return <Book
											key={book.id}
											book={book}
											changeShelf={changeShelf}	
										/>
							})
							:
							null
						}
					</ol>
				</div>
			</div>
		</div>
	)
}

SearchContainer.propTypes ={
	booksResults: PropTypes.arrayOf(PropTypes.object),
	updateBooks: PropTypes.func,
	updateBook: PropTypes.func,
	searchBook: PropTypes.func,	
}

export default SearchContainer