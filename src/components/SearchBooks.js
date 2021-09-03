import React, { useState } from 'react'

const SearchBooks = ({ handleSearch }) => {
  const [ query, setQuery ] = useState('');

  const handleChange = e => {
    setQuery(e.target.value)
    handleSearch( query )
  }

  return (
    <input type="text" placeholder="Search..." value={ query } onChange={ handleChange } />
  )
}

export default SearchBooks
