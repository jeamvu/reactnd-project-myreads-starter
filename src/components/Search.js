import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../api/BooksAPI'
import PropTypes from 'prop-types'

/**
 * @description Search component
 * @param onShelfUpdate
 * @returns {JSX.Element}
 * @constructor
 */
const Search = ({ onShelfUpdate }) => {
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    if (searchTerm.length > 0) {
      BooksAPI.search(searchTerm).then((results) => {
        if (results.error) {
          setSearchResults([])
        } else {
          setSearchResults(results.filter((result) => result.imageLinks && result.authors))
        }
      })
    } else {
      setSearchResults([])
    }
    return () => {
    }

  }, [searchTerm])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input type="text" value={searchTerm} placeholder="Search by title or author"
                 onChange={(e) => setSearchTerm(e.target.value)}/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} onChangeShelf={onShelfUpdate}/>
            </li>
          ))}

        </ol>
      </div>
    </div>
  )
}

export default Search

Search.propTypes = {
  onShelfUpdate: PropTypes.func.isRequired
}