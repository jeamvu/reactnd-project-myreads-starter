import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

/**
 * @description List component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const List = (props) => {
  const { books, onShelfUpdate } = props
  const shelves = [
    {
      id: 'currentlyReading',
      title: 'Currently Reading',
    },
    {
      id: 'wantToRead',
      title: 'Want to Read',
    },
    {
      id: 'read',
      title: 'Read',
    },
  ]

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.id}
              books={books.filter((book) => book.shelf === shelf.id)}
              id={shelf.id}
              title={shelf.title}
              onChangeShelf={onShelfUpdate}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link className="open-search-button" to="/search">Add a
          book</Link>
      </div>
    </div>
  )
}

export default List

List.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    shelf: PropTypes.string.isRequired,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  onShelfUpdate: PropTypes.func.isRequired
}