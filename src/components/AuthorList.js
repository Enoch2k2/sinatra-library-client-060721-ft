import React, { useEffect, useState } from 'react';
import AuthorCard from './AuthorCard';
import { baseUrl } from '../globals';

const AuthorList = () => {
  const [ authors, setAuthors ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const loadAuthors = async () => {
      const resp = await fetch(`${ baseUrl }/authors`)
      const data = await resp.json();
      setAuthors(data);
      setLoading(false);
    }
    loadAuthors();
  }, [])

  const deleteAuthor = async id => {
    await fetch(`${ baseUrl }/authors/${ id }`, { method: "DELETE" })
    removeAuthor( id );
  }
  
  const removeAuthor = id => {
    setAuthors(authors.filter( author => author.id !== id))
  }

  if(loading){ return <h1>Loading...</h1>}

  const authorCards = authors.map((author, index) => <AuthorCard key={ index } author={ author } deleteAuthor={ deleteAuthor }/>)

  return (
    <div>
      <h1>Authors</h1>
      { authorCards }
    </div>
  )
}

export default AuthorList
