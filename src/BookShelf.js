import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
	const { books, shelf, onChangeShelf } = props

	return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book, index) => <li key={index}><Book book={book} onChangeShelf={onChangeShelf} /></li> )}
					</ol>
				</div>
			</div>
	)
}

export default BookShelf