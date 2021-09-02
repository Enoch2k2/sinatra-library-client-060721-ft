import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'

import BookCard from './BookCard';
import { baseUrl } from '../globals';

const AuthorDetails = () => {
  const [ author, setAuthor ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadAuthor = async () => {
      const resp = await fetch(`${ baseUrl }/authors/${id}`)
      const data = await resp.json();

      setAuthor(data);
      setLoading(false);
    }
    loadAuthor();
  }, [id])

  if(loading) {
    return <h1>Loading...</h1>
  } else {

    const deleteBook = async id => {
      await fetch(`${ baseUrl }/books/${ id }`, { method: "DELETE" })
      removeBook( id );
    }
    
    const removeBook = id => {
      setAuthor({
        ...author,
        books: author.books.filter( book => book.id !== id)
      })
    }

    const bookCards = author.books.map((book, index) => <BookCard key={ index } book={ book } author={ author } deleteBook={ deleteBook } />)
    return (
      <div>
        <h1>{ author.name }</h1>
        <p><NavLink to={`/authors/${ author.id }/edit`}>Edit Author</NavLink></p>
        <p><NavLink to={`/authors/${ author.id }/books/new`}>Create Book</NavLink></p>
        { bookCards }
      </div>
    )
  }

}

export default AuthorDetails
