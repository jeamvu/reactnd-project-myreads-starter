import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 * @description Shelf component
 * @param books
 * @param title
 * @param onChangeShelf
 * @returns {JSX.Element}
 * @constructor
 */
const Shelf = ({ books, title, onChangeShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              onChangeShelf={onChangeShelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default Shelf

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}