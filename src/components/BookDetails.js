import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { baseUrl } from '../globals';

const BookDetails = () => {
  const [ book, setBook ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadBook = async () => {
      const resp = await fetch(`${ baseUrl }/books/${id}`)
      const data = await resp.json();
  
      setBook(data);
      setLoading(false);
    }
    loadBook();
  }, [id])

  if(loading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div>
        <h1>{ book.title }</h1>
        <p>By: <NavLink to={`/authors/${ book.author.id }`}>{ book.author.name }</NavLink></p>
        <p>Genre: { book.genre }</p>
      </div>
    )
  }

}

export default BookDetails;
