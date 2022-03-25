import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../api/BooksAPI'

/**
 * @description Book component
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Book = ({ book, onChangeShelf }) => {
  const [shelf, setShelf] = useState('none')

  useEffect(() => {
    if (!book.shelf) {
      BooksAPI.get(book.id).then((book) => {
        if (book.shelf) {
          setShelf(book.shelf)
        }
      })
    } else {
     setShelf(book.shelf)
    }
    return () => {
    }
  }, [book])

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url("${book.imageLinks.thumbnail}")`
        }}></div>
        <div className="book-shelf-changer">
          <select id={book.id} value={shelf}
                  onChange={(event) => onChangeShelf(book, event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

export default Book

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}