import React, { useEffect, useState } from 'react'
import * as BooksAPI from './api/BooksAPI'
import './App.css'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import List from './components/List'

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {

  const [books, setBooks] = useState([])
  useEffect(() => {
    BooksAPI.getAll().then(setBooks)
  }, [])

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(setBooks)
    })
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<Search onShelfUpdate={updateBook}/>}/>
        <Route exact path="/" element={<List books={books} onShelfUpdate={updateBook}/>}/>
      </Routes>
    </div>
  )
}

export default App