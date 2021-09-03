import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { baseUrl } from '../globals';
import SearchBooks from './SearchBooks';

const BookList = () => {
  const [ books, setBooks ] = useState([]);
  const [ filteredBooks, setFilteredBooks ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      const resp = await fetch(`${baseUrl}/books`)
      const data = await resp.json();
      setBooks(data);
      setFilteredBooks(data);
      setLoading(false);
    }
    loadBooks();
  }, [])
  if(loading){ return <h1>Loading...</h1>}

  const deleteBook = async id => {
    await fetch(`${baseUrl}/books/${ id }`, { method: "DELETE" })
    removeBook( id );
  }
  
  const removeBook = id => {
    setBooks(books.filter( book => book.id !== id))
  }

  const handleSearch = (term) => {
   setFilteredBooks(books.filter( book => book.title.toLowerCase().includes(term.toLowerCase())))
  }

  const bookCards = filteredBooks.map((book, index) => <BookCard key={ index } book={ book } author={ book.author } deleteBook={ deleteBook } />)
  return (
    <div>
      <h1>Books</h1>
      <SearchBooks handleSearch={ handleSearch } /><br/><br/>
      { bookCards }
    </div>
  )
}

export default BookList

