import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { baseUrl } from '../globals';

const BookList = () => {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      const resp = await fetch(`${baseUrl}/books`)
      const data = await resp.json();
      setBooks(data);
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

  const bookCards = books.map((book, index) => <BookCard key={ index } book={ book } author={ book.author } deleteBook={ deleteBook } />)
  return (
    <div>
      <h1>Books</h1>
      { bookCards }
    </div>
  )
}

export default BookList

