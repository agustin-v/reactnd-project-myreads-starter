import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Shelf from '../components/Shelf/Shelf'
import '../styles/App.css'

const LibraryContainer = ({books, updateBooks, updateBook}) => {

	const changeShelf = (book, shelf) => {
		this.props.updateBook(book, shelf)
	}

	const booksClassified = [
		{	
			key:'currentlyReading',
			label: 'Currently Reading',
			books: books.filter(book => book.shelf === 'currentlyReading')
		},
		{
			key:'wantToRead',
			label: 'Want to Read',
			books: books.filter(book => book.shelf === 'wantToRead')
		},
		{
			key:'read',
			label: 'Read',
			books: books.filter(book => book.shelf === 'read')
		}
	];
	
	return(
		<div>
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{
							booksClassified.map((shelf) => {
								return <Shelf
									key={shelf.key}
									shelf={shelf.key}
									label={shelf.label} 
									books={shelf.books}
									changeShelf={changeShelf}/>
							})
						}
					</div>
				</div>
				<div className="open-search">
					<Link to='/search'>Add a book</Link>
				</div>
			</div>

		</div>
	)
}

LibraryContainer.propTypes ={
	books: PropTypes.arrayOf(PropTypes.object),
	updateBooks: PropTypes.func,
	updateBook: PropTypes.func,	
}

export default LibraryContainer